# 🚲 EasyBike — Java Full Stack Bike Rental Platform

EasyBike is a full-stack **peer-to-peer bike rental platform** that allows users to rent bikes, register their own bikes for rental, and manage bookings. The platform provides separate customer and admin experiences with secure **role-based access control**.

The application is built using **React.js, Spring Boot, Spring Security, Hibernate, and MySQL**, and has been **containerized using Docker** for consistent deployment.

---

# 🌟 Features

## 👤 Customer Features

* User registration and login
* Browse approved bikes
* Search bikes by brand and model
* View detailed bike information
* Book bikes with pickup and return dates
* View booking history
* Cancel bookings
* Register personal bikes for rental
* Manage profile information

## 🛡️ Admin Features

* Admin dashboard
* View platform statistics
* Review pending bike registrations
* Approve or reject bike listings
* Manage all bookings
* Monitor booking status

---

# 🏗️ Application Architecture

### Development Architecture

```text
React Frontend
      |
    Axios
      |
Spring Boot REST API
      |
   Hibernate
      |
MySQL Database
```

### Dockerized Architecture

```text
                ┌─────────────────────┐
                │   React Frontend    │
                │     Container       │
                └──────────┬──────────┘
                           |
                           | HTTP / REST
                           |
                ┌──────────▼──────────┐
                │   Spring Boot API   │
                │     Container       │
                └──────────┬──────────┘
                           |
                           | JDBC
                           |
                ┌──────────▼──────────┐
                │   MySQL Database    │
                │     Container       │
                └─────────────────────┘
```

Docker isolates the application components into containers, making the application easier to build, run, and deploy consistently across environments.

---

# 🛠️ Tech Stack

## Frontend

* React.js
* JavaScript (ES6+)
* React Router DOM
* Axios
* CSS Modules
* React Icons
* Vite

## Backend

* Java
* Spring Boot
* Spring MVC
* Spring Data JPA
* Hibernate ORM
* Spring Security
* Maven

## Database

* MySQL

## DevOps & Development Tools

* Docker
* Dockerfile
* Git & GitHub
* Postman
* IntelliJ IDEA
* npm

---

# 🔄 Application Workflow

## Bike Listing Workflow

```text
Customer Registers Bike
          ↓
Bike Status = PENDING
          ↓
Admin Reviews Request
          ↓
Approve / Reject
          ↓
Approved Bikes Visible To Customers
```

## Booking Workflow

```text
Customer Selects Bike
          ↓
Views Bike Details
          ↓
Selects Rental Dates
          ↓
Booking Created
          ↓
Stored In Database
          ↓
Visible To Customer And Admin
```

---

# 🔐 Authentication & Authorization

EasyBike implements **role-based access control** using Spring Security.

## Customer

Can access:

* Customer Dashboard
* Bike Browsing
* Bike Details
* Booking System
* Bike Registration
* Booking History
* Profile Management

## Admin

Can access:

* Admin Dashboard
* Platform Statistics
* Bike Approval Management
* Booking Management
* Booking Status Monitoring

Protected routes and backend authorization prevent users from accessing functionality outside their assigned role.

---

# 📂 Project Structure

```text
EasyBike
│
├── frontend
│   │
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── context
│   │   └── api
│   │
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── backend
│   │
│   ├── src
│   │   ├── controller
│   │   ├── service
│   │   ├── repository
│   │   ├── entity
│   │   └── security
│   │
│   ├── Dockerfile
│   ├── pom.xml
│   └── ...
│
└── ...
```

---

# 📡 REST API Modules

## Authentication

```text
POST  /api/auth/register
POST  /api/auth/login
```

## Bikes

```text
GET   /api/bikes
GET   /api/bikes/{id}
POST  /api/bikes
PUT   /api/admin/bikes/{id}/approve
PUT   /api/admin/bikes/{id}/reject
```

## Bookings

```text
POST  /api/bookings
GET   /api/bookings/my
PUT   /api/bookings/{id}/cancel
```

---

# 🗄️ Database Design

## User

Stores:

* User information
* Login credentials
* User role

## Bike

Stores:

* Bike details
* Owner information
* Rental price
* Approval status

## Booking

Stores:

* Customer details
* Bike details
* Pickup date
* Return date
* Booking status

### Relationships

```text
User 1 -------- Many Bookings

Bike 1 -------- Many Bookings
```

---

# 🐳 Dockerization

EasyBike has been containerized to package the application components into reproducible environments.

## Docker Components

The application uses containers for:

* React frontend
* Spring Boot backend
* MySQL database

Each service runs in its own isolated environment while communicating through the Docker network.

### Benefits

* Consistent development and deployment environments
* Simplified application setup
* Isolated application services
* Easier dependency management
* Portable deployment
* Reduced environment-related configuration issues

---

# ⚙️ Running With Docker

Make sure Docker Desktop is installed and running.

### Build the application images

```bash
docker build -t easybike-backend ./backend
docker build -t easybike-frontend ./frontend
```

### Run the containers

Start the required containers and configure the backend database connection to communicate with the MySQL container.

The frontend communicates with the Spring Boot REST API, while the backend connects to MySQL through the Docker network.

### Check running containers

```bash
docker ps
```

### View container logs

```bash
docker logs <container-name>
```

### Stop containers

```bash
docker stop <container-name>
```

---

# 🚀 Deployment

EasyBike has been **Dockerized and deployed**, allowing the application to run using containerized frontend and backend services rather than relying only on local development environments.

The deployment architecture follows:

```text
User
  |
  ↓
React Frontend
  |
  ↓
Spring Boot REST API
  |
  ↓
MySQL
```

Docker provides a consistent runtime environment between development and deployment.

---

# 🖥️ Local Development Without Docker

## Backend Setup

Navigate to the backend:

```bash
cd backend
```

Run:

```bash
mvn spring-boot:run
```

Backend runs at:

```text
http://localhost:8080
```

## Frontend Setup

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

# 🎯 Key Concepts Implemented

* Full-stack application development
* REST API development
* CRUD operations
* Spring Boot
* Spring Data JPA
* Hibernate ORM
* Spring Security
* Authentication
* Authorization
* Role-based access control
* MySQL database design
* Entity relationships
* Client-server architecture
* Docker containerization
* Containerized deployment
* Responsive UI design

---

# 🚀 Future Enhancements

* Online payment integration
* Cloud image storage
* Email notifications
* Advanced bike filtering
* Real-time bike availability tracking
* Automated CI/CD pipeline
* Cloud-based database management
* Monitoring and logging

---

# 👨‍💻 Author

**Darimireddy Saketh Ram**

GitHub:

https://github.com/D-Saketh
