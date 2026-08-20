# 💬 Day 6 — Support Ticket API

## Overview

A real-world Support Ticket API designed to move beyond basic CRUD and practice backend architecture and workflow-based development.

The system represents how a support request can be created, assigned, updated, and eventually resolved.

## 🎯 Concepts Practiced

- REST APIs
- Controllers
- Routes
- Middleware
- Business logic
- Ticket workflow
- Status management
- Assignment
- Validation
- Error handling
- Real-world backend architecture

## 🎫 Example Ticket Workflow

```text
Open
  ↓
Assigned
  ↓
In Progress
  ↓
Resolved
  ↓
Closed
```

The exact workflow can be extended depending on application requirements.

## 🔄 Request Flow

```text
Client
  ↓
Route
  ↓
Middleware
  ↓
Controller
  ↓
Business Logic
  ↓
Database
  ↓
Response
```

## 🧱 Architecture

The project demonstrates why larger applications should separate responsibilities.

```text
Routes
  ↓
Middleware
  ↓
Controllers
  ↓
Services / Business Logic
  ↓
Models
  ↓
Database
```

## 🧠 Important Questions

- Why should business logic not be placed entirely inside routes?
- What is middleware?
- Why separate controllers and services?
- How should ticket status transitions be handled?
- How should errors be handled consistently?
- How can roles affect ticket operations?
- How would you extend this system for notifications or SLA tracking?

## 🎓 Learning Outcome

Day 6 is about thinking like a backend developer working on a real application rather than only implementing simple CRUD endpoints.
