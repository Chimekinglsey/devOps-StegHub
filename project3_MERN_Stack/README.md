# MERN Stack Todo Application

This project is a full-stack Todo application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It demonstrates the implementation of CRUD operations, RESTful API design, and integration between frontend and backend components. A personal documentation of my learnings is contained in learnings.md in this directory

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Backend Setup](#backend-setup)
  - [Server Configuration](#server-configuration)
  - [Database Setup](#database-setup)
  - [API Routes](#api-routes)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Learning Outcomes](#learning-outcomes)

## Features

- Create, Read, and Delete Todo tasks
- RESTful API design
- MongoDB integration for data persistence
- React-based user interface
- Cross-Origin Resource Sharing (CORS) support

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB
- **Cloud Services**: Amazon EC2, MongoDB Atlas
- **Additional Libraries**: Mongoose, Axios, dotenv

## Project Structure

```
Todo/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Input.js
│   │   │   ├── ListTodo.js
│   │   │   └── Todo.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
├── models/
│   └── todo.js
├── routes/
│   └── api.js
├── index.js
├── package.json
├── package-lock.json
├── connection_string.txt
└── mongosh.deb
```

## Backend Setup

### Server Configuration

1. Update and upgrade apt packages on the EC2 instance
2. Install Node.js and npm
3. Install required dependencies:
   ```
   npm install express mongoose dotenv
   ```
4. Configure `index.js` to create an Express server listening on port 5000 (or as defined in `.env`)
5. Set up CORS headers to allow cross-origin requests
![index.js](images/welcome_to_express.png)

### Database Setup

1. Create a MongoDB database using MongoDB Atlas
2. Define the Todo schema and model in `models/todo.js`
3. Set up environment variables for the database connection string (stored in `connection_string.txt`)

### API Routes

Create routes in `routes/api.js` for CRUD operations:
- POST: Create a new todo task
- GET: Retrieve all todo tasks
- DELETE: Remove a specific todo task

## Frontend Setup

1. Navigate to the `client` directory
2. Install dependencies:
   ```
   npm install
   ```
3. The React app is structured with the following key components:
   - `components/Input.js`: Form for adding new tasks
   - `components/Todo.js`: Manages form submission and API interaction
   - `components/ListTodo.js`: Displays and manages the list of tasks
4. `App.js` serves as the main component, integrating all other components

## Running the Application

1. Start the backend server from the root directory:
   ```
   node index.js
   ```
2. In a new terminal, start the frontend development server:
   ```
   cd client
   npm run dev
   ```

## API Endpoints

- `POST /api/todos`: Create a new todo task
- `GET /api/todos`: Retrieve all todo tasks
- `DELETE /api/todos/:id`: Delete a specific todo task

## Learning Outcomes

- Implementation of REST API design principles
- Understanding of CRUD operations in a full-stack application
- Database integration using Mongoose and MongoDB
- State management in React components
- Error handling in Node.js applications
- Use of environment variables for configuration management
- Cross-Origin Resource Sharing (CORS) implementation
- Asynchronous JavaScript with Async/Await and Promises
- Version control with Git and GitHub

---

This project was developed as a learning exercise to understand the MERN stack and RESTful API design. Feel free to contribute or use it as a template for your own projects!