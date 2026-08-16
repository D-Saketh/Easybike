# 🚲 EasyBike — Java Full Stack Bike Rental Platform

EasyBike is a full-stack **peer-to-peer bike rental application** that allows users to rent bikes, register their own bikes for rental, and manage bookings. The platform provides separate customer and admin experiences with secure role-based access.

Built with **React.js, Spring Boot, MySQL, and Spring Security**.

---

# 🌟 Features

## 👤 Customer Features

- User registration and login
- Browse approved bikes
- Search bikes by brand and model
- View detailed bike information
- Book bikes with pickup and return dates
- View booking history
- Cancel bookings
- Register personal bikes for rental
- Manage profile information


## 🛡️ Admin Features

- Admin dashboard
- View platform statistics
- Review pending bike registrations
- Approve or reject bike listings
- Manage all bookings
- Monitor booking status

---

# 🏗️ Application Architecture

```
                 React Frontend
                       |
                       |
                    Axios
                       |
                       |
             Spring Boot REST API
                       |
                       |
                 MySQL Database
```

---

# 🛠️ Tech Stack

## Frontend

- React.js
- JavaScript (ES6+)
- React Router DOM
- Axios
- CSS Modules
- React Icons
- Vite


## Backend

- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate ORM
- Spring Security


## Database

- MySQL


## Development Tools

- Git & GitHub
- Maven
- Postman
- IntelliJ IDEA
- npm

---

# 🔄 Application Workflow

## Bike Listing Workflow

```
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

```
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

EasyBike implements role-based access control.

## Customer

Can access:

- Customer Dashboard
- Bike Browsing
- Booking System
- Bike Registration


## Admin

Can access:

- Admin Dashboard
- Bike Approval Management
- Booking Management


Protected routes prevent unauthorized access based on user roles.

---

# 📂 Project Structure

```
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
│   └── package.json
│
└── backend
    │
    ├── src
    │   ├── controller
    │   ├── service
    │   ├── repository
    │   ├── entity
    │   └── security
    │
    └── pom.xml
```

---

# 📡 REST API Modules

## Authentication

```
POST  /api/auth/register
POST  /api/auth/login
```


## Bikes

```
GET   /api/bikes
GET   /api/bikes/{id}
POST  /api/bikes
PUT   /api/admin/bikes/{id}/approve
PUT   /api/admin/bikes/{id}/reject
```


## Bookings

```
POST /api/bookings
GET  /api/bookings/my
PUT  /api/bookings/{id}/cancel
```

---

# 🗄️ Database Design

## User Table

Stores:

- User information
- Login credentials
- User role


## Bike Table

Stores:

- Bike details
- Owner information
- Rental price
- Approval status


## Booking Table

Stores:

- Customer details
- Bike details
- Pickup date
- Return date
- Booking status

Relationships:

```
User 1 -------- Many Bookings

Bike 1 -------- Many Bookings
```

---

# ⚙️ Running The Project

## Backend Setup

Navigate to backend:

```bash
cd backend
```

Run:

```bash
mvn spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

## Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start application:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 📸 Screenshots

Add screenshots:

- Login Page
- Customer Dashboard
- Browse Bikes
- Bike Details
- Booking Page
- Admin Dashboard

---

# 🚀 Future Enhancements

- Online payment integration
- Cloud image storage
- Email notifications
- Advanced bike filtering
- Real-time availability tracking
- Docker containerization
- AWS deployment

---

# 🎯 Key Concepts Implemented

- Full-stack development
- REST API development
- CRUD operations
- Authentication
- Authorization
- Role-based access control
- Database relationships
- Client-server architecture
- Responsive UI design

---

# 👨‍💻 Author

**Darimireddy Saketh Ram**

GitHub:

https://github.com/D-Saketh
