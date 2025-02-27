# To-Do List REST API

A secure REST API for managing a to-do list built with **Node.js**, **Express**, and **MongoDB**. The API uses **JWT-based authentication** for secure access to all endpoints. Passwords are hashed using **bcrypt**.

---

## Features

1. **User Authentication**:
   - User registration with username and password (hashed).
   - User login with JWT token generation.

2. **To-Do List Management**:
   - Create a new task.
   - List all tasks for the authenticated user.
   - Update a task (title, description, or completion status).
   - Delete a task.

---

## API Routes

### Authentication Routes

| Method | Endpoint           | Description                          |
|--------|--------------------|--------------------------------------|
| POST   | `/api/register` | Register a new user.                 |
| POST   | `/api/login`    | Log in and receive a JWT token.      |

### Task Routes (Authenticated)

| Method | Endpoint           | Description                          |
|--------|--------------------|--------------------------------------|
| POST   | `/api/tasks/`       | Create a new task.                   |
| GET    | `/api/tasks/`       | List all tasks for the user.         |
| PUT    | `/api/tasks/:id`    | Update a task by ID.                 |
| DELETE | `/api/tasks/:id`    | Delete a task by ID.                 |

---

## File Structure
```
todo-api/
├── config/
│ └── db.js # MongoDB connection setup
├── controllers/
│ ├── authController.js # Handles user registration and login
│ └── taskController.js # Handles task-related operations
├── middleware/
│ └── authMiddleware.js # JWT authentication middleware
├── models/
│ ├── user.js # User schema and model
│ └── task.js # Task schema and model
├── routes/
│ ├── authRoutes.js # Routes for authentication
│ └── taskRoutes.js # Routes for task management
├── .env # Environment variables
├── index.js # Entry point for the application
└── README.md # Project documentation
```
## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) 
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Postman](https://www.postman.com/) or any API testing tool

---

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/adityabhave525/Floww-Todo.git
   cd Floww-Todo

2. **Install Dependencies**:
    ```bash
    npm install

3. **Set Up Environment Variables**:
- Create a .env file in the root directory and add the following:

    ```env
    MONGO_URI=mongodb://localhost:27017/todo_db
    JWT_SECRET=your_jwt_secret_key

4. **Start the Server**:
    ```bash
    npm start

## Example Requests

**Register a new user**

```http
POST /api/register
Content-Type: application/json

{
  "username": "john_doe",
  "password": "password123"
}
```

**Response**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Login**
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "password123"
}
```
**Response**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Create a task**
```http
POST /api/tasks/
Content-Type: application/json
Authorization: <token>

{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs"
}
```

**Response**
```json
{
  "_id": "64f1b2c8e4b0f5a3d4f5e6a7",
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "is_completed": false,
  "created_at": "2023-09-03T12:00:00.000Z",
  "user": "64f1b2c8e4b0f5a3d4f5e6a7"
}
```

**List all tasks**
```http
GET /api/tasks/
Authorization: <token>
```

```json
[
  {
    "_id": "64f1b2c8e4b0f5a3d4f5e6a7",
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs",
    "is_completed": false,
    "created_at": "2023-09-03T12:00:00.000Z",
    "user": "64f1b2c8e4b0f5a3d4f5e6a7"
  }
]
```

**Update task**
```http
PUT /api/tasks/64f1b2c8e4b0f5a3d4f5e6a7
Content-Type: application/json
Authorization: <token>

{
  "is_completed": true
}
```

```json
{
  "_id": "64f1b2c8e4b0f5a3d4f5e6a7",
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "is_completed": true,
  "created_at": "2023-09-03T12:00:00.000Z",
  "user": "64f1b2c8e4b0f5a3d4f5e6a7"
}
```

**Delete task**
```http
DELETE /api/tasks/64f1b2c8e4b0f5a3d4f5e6a7
Authorization: Bearer <token>
```

```json
{
  "message": "Task deleted"
}
```