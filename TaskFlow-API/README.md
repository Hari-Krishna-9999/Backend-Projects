# 📝 Day 1 — Task Manager API

## Overview

A simple RESTful Task Manager API built to practice backend fundamentals using Node.js and Express.js.

The project focuses on understanding how a backend receives HTTP requests, processes CRUD operations, and returns appropriate HTTP responses.

## 🎯 Concepts Practiced

- REST API
- CRUD operations
- HTTP methods
- HTTP status codes
- Express routes
- Request and response objects
- Controllers
- JSON data
- Error handling

## 🔄 CRUD Operations

| Operation | HTTP Method | Purpose |
|---|---|---|
| Create | POST | Create a task |
| Read | GET | Get tasks |
| Update | PUT/PATCH | Update a task |
| Delete | DELETE | Delete a task |

## 🔄 Request Flow

```text
Client
  ↓
HTTP Request
  ↓
Express Router
  ↓
Controller
  ↓
Task Logic
  ↓
HTTP Response
```

## 📌 Example API Endpoints

```text
GET    /tasks
GET    /tasks/:id
POST   /tasks
PUT    /tasks/:id
DELETE /tasks/:id
```

## 📊 Important Status Codes

- `200 OK` — successful request
- `201 Created` — resource created
- `400 Bad Request` — invalid request
- `404 Not Found` — resource not found
- `500 Internal Server Error` — unexpected server error

## 🧠 Interview Questions

- What is REST?
- What is CRUD?
- Difference between PUT and PATCH?
- Why use POST for creating a resource?
- What does status code 201 mean?
- What is the difference between `req.params`, `req.query`, and `req.body`?
- Why should APIs return proper status codes?

## 🎓 Learning Outcome

After Day 1, I should be able to build a basic REST API from scratch and explain the complete request-response cycle.
