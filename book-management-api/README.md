# 📚 Day 4 — Book Management API

## Overview

A Book Management API built to practice MongoDB, Mongoose, relationships, CRUD operations, and query-based filtering.

## 🎯 Concepts Practiced

- MongoDB
- Mongoose
- Schemas
- Models
- CRUD operations
- Database relationships/references
- Query parameters
- Search
- Filtering
- `$or`
- `$and`

## 🗃️ Database Layer

Typical flow:

```text
Controller
   ↓
Mongoose Model
   ↓
MongoDB
```

## 🔍 Query Parameters

Example:

```text
GET /books?search=node&author=John
```

Backend receives:

```text
req.query.search
req.query.author
```

These values are then mapped to database fields.

Important:

> A client query parameter does not automatically have to be a database field.

For example:

```text
search
```

can be a client-side query parameter that maps to:

```text
title
author
description
```

## 🔎 `$or` vs `$and`

Use `$or` when any condition can match:

```text
title matches
OR
author matches
```

Use `$and` when multiple conditions must explicitly be satisfied.

MongoDB also implicitly ANDs conditions on different fields in a normal filter, so explicit `$and` is often unnecessary.

## 🧠 Interview Questions

- What is MongoDB?
- What is Mongoose?
- Difference between MongoDB and Mongoose?
- What is a schema?
- What is a model?
- What is a relationship/reference?
- What is `req.query`?
- Difference between query parameters and route parameters?
- `$or` vs `$and`?
- How would you implement search across multiple fields?

## 🎓 Learning Outcome

After Day 4, I should understand how an Express backend communicates with MongoDB through Mongoose and how client filters are translated into database queries.
