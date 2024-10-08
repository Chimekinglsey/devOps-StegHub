# MEAN Stack Learning Journey

This learning journey documents the core concepts and steps taken to build a **Book Manager Application** using the MEAN stack (MongoDB, Express, Angular, Node.js). It captures essential database principles, API design, and backend/frontend development techniques.

## Database Fundamentals Revisited

A **database** is an organized collection of data, typically structured to facilitate information retrieval and management. There are two primary database types:

### Types of Databases

1. **Relational Databases (SQL)**: Structured, table-based databases with predefined schemas (e.g., MySQL, PostgreSQL).
2. **Non-relational Databases (NoSQL)**: Document-based or key-value stores without fixed schema definitions (e.g., MongoDB, DynamoDB).

### Key Differences Between SQL and NoSQL
- **SQL**: Rigid schema, table-based structure.
- **NoSQL**: Flexible schema, document-based structure.
  
### Concepts Refreshed
- **Indexing**: Speeds up data retrieval.
- **Partitioning**: Divides the database for better performance.
- **Sharding**: Distributes data across multiple servers to enhance performance.


### REST Design Fundamentals Revisited
1. **Statelessness**: No client data stored on the server.
2. **Cacheability**: Mark responses cacheable or non-cacheable.
3. **Layered System**: Design API in modular layers.
4. **Uniform Interface**: Consistent use of HTTP methods and status codes.

---

## Backend Development (Node.js, Express, MongoDB)

### EC2 Server Setup
1. Updated packages and installed **Node.js** and **npm**.
2. Configured an Express server to listen on a port (using `dotenv`).
3. Verified server operation by retrieving instance metadata and public IP.

### CRUD Operations with MongoDB
1. Defined a **Book Schema** using **Mongoose** and connected to MongoDB.
2. Created routes for CRUD operations:
   - **POST**: Add a new book.
   - **GET**: Retrieve all books.
   - **DELETE**: Delete a book by ISBN.
3. Used **Postman** for testing API endpoints.

---

## Frontend Development (Angular)

### Angular Setup
1. Initialized an Angular app using the **Angular CLI**.
2. Created components for book management:
   - **BookFormComponent**: Handles adding new books.
   - **BookListComponent**: Displays books in a table and allows deletion.
3. Connected the frontend to the Express backend using **HTTPClientModule** for making API calls.

### Key Angular Features
- **Two-way data binding** for managing form inputs.
- **Services** for making API requests to the backend.
- **ngModel** and **ngFor** for form input binding and rendering lists.

---

## Practical Takeaways

### Testing and Debugging
- Utilized **Postman** to ensure backend functionality.
- Tested the Angular app in the browser to confirm frontend integration.

### Additional Learnings
- Explored **concurrently** to run frontend and backend servers together.
- Implemented `try-catch` blocks in Node.js for error handling.
- Revisited the use of **Axios** in React for seamless API requests

---

## Conclusion

This journey covered the core components of building a full MEAN stack application, focusing on backend API development with Express and MongoDB, as well as frontend development using Angular. The experience strengthened my REST API design skills, knowledge of MongoDB, and Angular’s frontend capabilities.
