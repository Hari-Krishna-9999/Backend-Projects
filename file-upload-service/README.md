# 📁 Day 5 — File Upload Service

## Overview

A file upload backend service built to understand how Express handles multipart form data and how uploaded files can be validated, stored, and served.

## 🎯 Concepts Practiced

- Multer
- Multipart/form-data
- File upload
- File validation
- File size limits
- File type validation
- Static files
- File metadata
- Express.static

## 🔄 Upload Flow

```text
Client
  ↓
multipart/form-data
  ↓
Multer Middleware
  ↓
File Validation
  ↓
File Storage
  ↓
Metadata
  ↓
Response
```

## 🗂️ Static Files

Uploaded files can be made accessible using:

```text
express.static()
```

This allows the backend to serve stored files through a URL.

## 🛡️ Validation

A production-style upload service should validate:

- File type
- File size
- File extension
- File name where necessary
- Upload errors

## 🧠 Interview Questions

- What is Multer?
- Why is multipart/form-data required?
- How does Multer process uploaded files?
- How do you restrict file types?
- How do you limit file size?
- What is `express.static()`?
- Difference between file data and file metadata?
- Where should uploaded files be stored in production?

## 🎓 Learning Outcome

After Day 5, I should be able to implement a basic file upload service and explain the complete upload-to-storage flow.
