# 🔐👥 Day 2 + Day 3 — Authentication & Role-Based User System

## Overview

Day 2 and Day 3 were practiced together in one backend project.

The project implements user authentication using bcrypt and JWT, followed by authorization using roles and protected routes.

## 🎯 Concepts Practiced

### Day 2 — Authentication

- User registration
- Password hashing
- bcrypt
- Login
- Password comparison
- JWT generation
- JWT verification
- Authentication middleware
- Protected routes

### Day 3 — Authorization

- User roles
- Role-based access
- Authorization middleware
- Protected routes
- Authentication vs authorization
- 401 vs 403
- Reusable middleware

## 🔐 Authentication vs Authorization

### Authentication

Answers:

> Who are you?

Example:

```text
Login → Verify credentials → Generate JWT
```

### Authorization

Answers:

> What are you allowed to do?

Example:

```text
Admin → Can delete users
User  → Cannot delete users
```

## 🔄 Authentication Flow

```text
Register
   ↓
Receive password
   ↓
bcrypt.hash()
   ↓
Store hashed password
```

```text
Login
   ↓
Find user
   ↓
bcrypt.compare()
   ↓
Generate JWT
   ↓
Return token
```

## 🛡️ Protected Route Flow

```text
Client
  ↓
Authorization: Bearer <token>
  ↓
Authentication Middleware
  ↓
Verify JWT
  ↓
Extract user information
  ↓
Authorization Middleware
  ↓
Check role
  ↓
Controller
```

## 🚦 401 vs 403

### 401 Unauthorized

The user is not properly authenticated.

Examples:

- Missing token
- Invalid token
- Expired token

### 403 Forbidden

The user is authenticated but does not have permission.

Example:

```text
User role = user
Required role = admin
→ 403 Forbidden
```

## 🧩 Middleware Design

A reusable role middleware can conceptually work like:

```text
authorize("admin")
       ↓
Check req.user.role
       ↓
Allowed → next()
Denied  → 403
```

## 🧠 Interview Questions

- Why should passwords never be stored as plain text?
- Why use bcrypt?
- What is JWT?
- What information can a JWT contain?
- How is JWT verified?
- Where should authentication logic be placed?
- Authentication vs authorization?
- Why use middleware?
- Difference between 401 and 403?
- How can one middleware support multiple roles?

## 🎓 Learning Outcome

After Day 2 and Day 3, I should be able to build a secure authentication system and protect different API routes based on user roles.
