import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

export default function EmployeeComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  // Load employee details if updating
  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id)
        .then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
        })
        .catch((err) => console.error("Error fetching employee:", err));
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();
    const employee = { firstName, lastName, email };

    if (id) {
      // Update employee
      EmployeeService.updateEmployee(id, employee)
        .then(() => {
          navigate("/employees"); // go back to list
        })
        .catch((err) => console.error("Error updating employee:", err));
    } else {
      // Create employee
      EmployeeService.createEmployee(employee)
        .then(() => {
          navigate("/employees"); // go back to list
        })
        .catch((err) => console.error("Error saving employee:", err));
    }
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center mt-3">
            {id ? "Update Employee" : "Add Employee"}
          </h2>
          <div className="card-body">
            <form onSubmit={saveOrUpdateEmployee}>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-success">
                {id ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
