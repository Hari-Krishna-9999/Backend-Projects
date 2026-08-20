# Backend Projects

A 7-day backend development revision program focused on building practical Node.js, Express.js, MongoDB, authentication, authorization, file handling, real-world workflows, and complete backend integration.

## 🎯 Goal

The purpose of this project is to strengthen backend fundamentals through small, practical projects instead of learning concepts only through theory.

By the end of Day 7, the projects cover:

- REST API development
- CRUD operations
- HTTP methods and status codes
- Authentication with bcrypt and JWT
- Authorization and role-based access
- MongoDB and Mongoose
- Filtering and relationships
- File uploads with Multer
- Static file serving
- Middleware architecture
- Real-world support-ticket workflows
- Complete backend integration
- API testing and error handling

## 🗓️ 7-Day Roadmap

| Day | Project | Main Concepts |
|---|---|---|
| Day 1 | 📝 Task Manager API | REST API, CRUD, HTTP methods, status codes |
| Day 2 + Day 3 | 🔐👥 Authentication & Role-Based User System | bcrypt, JWT, authentication, authorization, roles, protected routes |
| Day 4 | 📚 Book Management API | MongoDB, Mongoose, relationships, filtering |
| Day 5 | 📁 File Upload Service | Multer, file validation, static files |
| Day 6 | 💬 Support Ticket API | Real-world backend architecture, workflow, middleware |
| Day 7 | 🛒 Mini E-Commerce Backend | Complete backend integration |

> **Note:** Day 2 and Day 3 were practiced together in a single project, so they have one README.

## 🧱 Overall Architecture

The projects progressively move from simple REST APIs to a more realistic backend architecture.

```text
Client
  ↓
HTTP Request
  ↓
Express Server
  ↓
Middleware
  ↓
Route
  ↓
Controller
  ↓
Model / Database
  ↓
Response
```

As the projects become more advanced, additional layers such as authentication middleware, authorization middleware, validation, file handling, and business workflows are introduced.

## 🛠️ Common Technology Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- dotenv
- Thunder Client / Postman
- Git & GitHub

## 📁 Project Structure

```text
Backend-Revision/
│
├── Day-1-Task-Manager/
│   └── README.md
│
├── Day-2-3-Authentication-Role-Based-System/
│   └── README.md
│
├── Day-4-Book-Management/
│   └── README.md
│
├── Day-5-File-Upload-Service/
│   └── README.md
│
├── Day-6-Support-Ticket-API/
│   └── README.md
│
├── Day-7-Mini-E-Commerce/
│   └── README.md
│
└── README.md
```

## 📚 What I Learned

### Day 1 — REST API Fundamentals

Built a Task Manager API to understand:

- REST principles
- GET, POST, PUT/PATCH and DELETE
- CRUD operations
- Request and response objects
- HTTP status codes
- Route handling
- Controllers
- Basic error handling

### Day 2 + Day 3 — Authentication & Authorization

Built authentication and role-based access control in one project.

Learned:

- User registration
- Password hashing with bcrypt
- Login
- Password comparison
- JWT creation
- JWT verification
- Authentication middleware
- Protected routes
- User roles
- Authorization
- 401 vs 403
- Reusable role middleware

### Day 4 — MongoDB & Mongoose

Built a Book Management API to practice:

- MongoDB
- Mongoose schemas and models
- CRUD with MongoDB
- Relationships/references
- Query parameters
- Filtering
- Search
- `$or` and `$and`
- Mapping client query parameters to database fields

Important distinction:

```text
Client:
GET /books?search=node

Backend:
req.query.search

Database filter:
{ $or: [
    { title: /node/i },
    { author: /node/i }
] }
```

Conditions on different fields in a normal MongoDB filter are implicitly combined with **AND**, so explicit `$and` is often unnecessary.

### Day 5 — File Uploads

Built a file upload service using:

- Multer
- Multipart/form-data
- File validation
- File size restrictions
- File type validation
- Static file serving
- File metadata storage

### Day 6 — Real-World Backend Architecture

Built a Support Ticket API to understand how backend systems work in real applications.

Practiced:

- Ticket creation
- Ticket assignment
- Ticket status workflow
- Middleware
- Controllers
- Services
- Validation
- Error handling
- Role-based operations
- Workflow-driven APIs
- Clean project structure

### Day 7 — Complete Backend Integration

The final project combines the major concepts from the previous six days.

Expected concepts include:

- Authentication
- Authorization
- Users
- Products
- Categories
- Cart
- Orders
- CRUD APIs
- MongoDB
- Mongoose
- Middleware
- Validation
- Business logic
- Error handling
- Complete request flow

## 🔄 Request Flow

A typical protected API request follows this pattern:

```text
Client
  ↓
POST /api/resource
  ↓
Express Router
  ↓
Authentication Middleware
  ↓
Authorization Middleware
  ↓
Controller
  ↓
Service / Business Logic
  ↓
Mongoose Model
  ↓
MongoDB
  ↓
Controller Response
  ↓
Client
```

## 🚀 Final Outcome

After completing all seven days, the goal is not just to have seven projects.

The goal is to understand the complete backend development journey:

```text
REST API
   ↓
CRUD
   ↓
Authentication
   ↓
Authorization
   ↓
Database
   ↓
Filtering
   ↓
File Handling
   ↓
Middleware
   ↓
Business Workflows
   ↓
Complete Backend System
```

This repository serves as both a **backend practice repository** and an **interview revision reference**.
