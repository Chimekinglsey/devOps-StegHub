# Book Manager - MEAN Stack Application

This is a full-stack **Book Management Application** built using the MEAN stack (MongoDB, Express, Angular, Node.js). The app allows users to add, view, and delete books with basic information such as name, ISBN, author, and page count.

## Features

- Add a new book with name, ISBN, author, and pages.
- View a list of all books.
- Delete books from the list.
- Responsive user interface built with Angular.
- RESTful API using Express and MongoDB.
![books](images/books.png)
## Tech Stack

- **MongoDB**: Database to store book information.
- **Express**: Backend framework for handling API routes and server setup.
- **Angular**: Frontend framework for building a dynamic and responsive UI.
- **Node.js**: Server-side environment for executing JavaScript code.

## Prerequisites

- Node.js (v14+)
- MongoDB (local or cloud instance)
- Angular CLI

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Chimekinglsey/book-manager.git
   cd book-manager
   ```

2. **Install server dependencies:**
   ```bash
   npm install
   ```

3. **Install Angular dependencies:**
   ```bash
   cd src
   npm install
   ```

4. **Set up MongoDB:**
   - Ensure MongoDB is running locally or use a cloud MongoDB instance.
   - Update the MongoDB connection string in `server.js` (default: `mongodb://localhost:27017/test`).
![schema](images/schema.png)
## Usage

### 1. Run the Backend (Express + MongoDB)
 - Ensure that AWS security groups are configured to allow access port 80, 3300 and 4200 (if you cant to use `ng serve`)
![security_group](images/security_group.png)
```bash
node server.js
```
The server will be running at `http://localhost:3300`.
![node_server](images/node_server.png)
### 2. Run the Frontend (Angular)
```bash
cd src
ng serve
```
The Angular app will be running at `http://localhost:4200`.

## API Endpoints

- **GET /book**: Fetch all books.
- **POST /book**: Add a new book (JSON body: `{ name, isbn, author, pages }`).
- **DELETE /book/:isbn**: Delete a book by ISBN.

## File Structure

```bash
/Books
│
├── /node_modules          # Node.js dependencies
├── /apps                  # Server-side code
│   ├── /models            # Mongoose models (Book schema)
│   ├── routes.js          # API routes
│   └── server.js          # Express server setup
│
├── /public                # Static files
│   ├── index.html         # Static HTML served by the server
│   └── scripts.js         # Legacy scripts
│
├── /src                   # Angular application
│   ├── /app               # Angular components and services
│   ├── /assets            # Static assets
│   ├── /environments      # Angular environment configs
│   ├── index.html         # Main Angular HTML
│   └── main.ts            # Angular app entry point
│
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

## Example Requests

### Add a New Book (POST)
```bash
POST http://localhost:3300/book
Content-Type: application/json

{
  "name": "Rediscovering the Kingdom",
  "isbn": "1234567890",
  "author": "Dr. Myles Munroe",
  "pages": 300
}
```

### Fetch All Books (GET)
```bash
GET http://localhost:3300/book
```
![postman](images/postman_api.png)
### Delete a Book (DELETE)
```bash
DELETE http://localhost:3300/book/1234567890
```


This simple Book Manager is built for managing books easily with a MEAN stack setup.