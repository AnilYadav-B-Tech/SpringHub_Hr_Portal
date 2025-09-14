import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

export default function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Fetch employees
  const fetchEmployees = () => {
    setLoading(true);
    EmployeeService.getAllEmployees()
      .then((response) => setEmployees(response.data))
      .catch((err) => console.error("Error fetching employees:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Navigation
  const addEmployee = () => navigate("/add-employee");
  const updateEmployee = (id) => navigate(`/edit-employee/${id}`);

  // Delete
  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      EmployeeService.deleteEmployee(id)
        .then(() => {
          setEmployees(employees.filter((e) => e.id !== id));
          setMessage("Employee deleted successfully!");
          setTimeout(() => setMessage(""), 3000);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Employees</h2>
          <button className="btn btn-primary" onClick={addEmployee}>
            Add Employee
          </button>
        </div>

        {message && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        )}

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No employees found.
                    </td>
                  </tr>
                ) : (
                  employees.map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.email}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-info me-2"
                          onClick={() => updateEmployee(employee.id)}
                        >
                          <i className="bi bi-pencil-square me-1"></i> Update
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteEmployee(employee.id)}
                        >
                          <i className="bi bi-trash me-1"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
