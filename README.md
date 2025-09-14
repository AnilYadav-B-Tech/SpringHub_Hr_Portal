# ?? Employee Management System (EMS)

A modern, full-stack Employee Management System built with **Spring Boot** backend and **React** frontend. This application provides a complete CRUD interface for managing employee records with a clean, responsive UI.

![Employee Management System](https://img.shields.io/badge/Full--Stack-Employee%20Management-blue?style=for-the-badge&logo=react&logoColor=white)

## ? Features

### ?? Core Functionality
- **Create Employee**: Add new employees with first name, last name, and email
- **View Employees**: Display all employees in a clean, sortable table
- **Update Employee**: Edit existing employee information
- **Delete Employee**: Remove employees with confirmation dialog
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### ??? Technical Features
- **RESTful API**: Well-structured REST endpoints
- **Real-time Updates**: Instant UI updates after operations
- **Form Validation**: Client-side and server-side validation
- **Loading States**: User-friendly loading indicators
- **Error Handling**: Comprehensive error handling and user feedback
- **Modern UI**: Bootstrap-styled components with hover effects

## ??? Architecture

```
Employee Management System
??? Frontend (React)
?   ??? Components
?   ?   ??? HeaderComponent
?   ?   ??? FooterComponent
?   ?   ??? ListEmployeeComponent
?   ?   ??? EmployeeComponent (Add/Edit)
?   ??? Services
?       ??? EmployeeService (API calls)
?
??? Backend (Spring Boot)
    ??? REST API Endpoints
    ??? JPA/Hibernate ORM
    ??? MySQL Database
```

## ?? Quick Start

### Prerequisites
- **Java 17+**
- **Node.js 16+**
- **MySQL 8.0+**
- **Maven 3.6+**

### ??? Database Setup
```sql
CREATE DATABASE employee_management_system;
```

### ?? Backend Setup
1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ems-backend
   ```

2. **Configure database connection**
   ```properties
   # src/main/resources/application.properties
   spring.datasource.url=jdbc:mysql://localhost:3306/employee_management_system
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   ```

3. **Run the backend**
   ```bash
   ./mvnw spring-boot:run
   ```
   Backend will start on `http://localhost:8080`

### ? Frontend Setup
1. **Navigate to frontend directory**
   ```bash
   cd ems-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Frontend will start on `http://localhost:5173`

## ?? API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/employees` | Get all employees |
| `GET` | `/api/employees/{id}` | Get employee by ID |
| `POST` | `/api/employees` | Create new employee |
| `PUT` | `/api/employees/{id}` | Update employee |
| `DELETE` | `/api/employees/{id}` | Delete employee |

### Example API Usage
```javascript
// Get all employees
GET http://localhost:8080/api/employees

// Create employee
POST http://localhost:8080/api/employees
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com"
}
```

## ?? Screenshots

### Employee List View
- Clean table layout with employee information
- Action buttons for edit and delete operations
- Responsive design with Bootstrap styling

### Add/Edit Employee Form
- Form validation for all fields
- Reusable component for both add and edit operations
- User-friendly success/error messages

## ?? Technology Stack

### Frontend
- **React 18** - Modern UI library
- **React Router** - Client-side routing
- **Bootstrap 5** - Responsive CSS framework
- **Axios** - HTTP client for API calls
- **Vite** - Fast build tool

### Backend
- **Spring Boot 3.5.5** - Java framework
- **Spring Data JPA** - Data persistence
- **MySQL** - Relational database
- **Maven** - Dependency management
- **Lombok** - Reduce boilerplate code

## ?? Project Structure

```
ems-system/
??? ems-backend/
?   ??? src/main/java/net/javaguides/ems_backend/
?   ?   ??? EmsBackendApplication.java
?   ?   ??? controller/          # REST controllers
?   ?   ??? entity/             # JPA entities
?   ?   ??? repository/         # Data repositories
?   ?   ??? service/            # Business logic
?   ??? src/main/resources/
?       ??? application.properties
?
??? ems-frontend/
?   ??? src/
?   ?   ??? components/         # React components
?   ?   ??? services/          # API service layer
?   ?   ??? App.jsx            # Main app component
?   ?   ??? main.jsx           # Entry point
?   ??? public/
```

## ??? Security Features

- **Input Validation**: Server-side validation for all inputs
- **SQL Injection Protection**: JPA prevents SQL injection
- **CORS Configuration**: Proper cross-origin setup
- **Error Handling**: Secure error messages

## ?? Development Workflow

### Adding New Features
1. **Backend**: Add entity ? repository ? service ? controller
2. **Frontend**: Create/update components ? add routing ? integrate API
3. **Testing**: Test API endpoints and UI functionality

### Common Commands
```bash
# Backend
./mvnw clean install          # Build project
./mvnw spring-boot:run        # Run application
./mvnw test                   # Run tests

# Frontend  
npm run dev                   # Development server
npm run build                 # Production build
npm run preview               # Preview production build
```

## ?? Troubleshooting

### Common Issues

**Database Connection Error**
- Verify MySQL is running
- Check database credentials in `application.properties`
- Ensure database exists

**CORS Error**
- Verify backend is running on port 8080
- Check CORS configuration in Spring Boot

**Frontend Build Issues**
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

## ?? Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## ?? License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ?? Acknowledgments

- Built with Spring Boot and React
- UI components powered by Bootstrap
- Icons from Bootstrap Icons

---

### ?? Contact

For questions or support, please open an issue in the repository.

**Happy Coding!** ??