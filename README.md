# Library Management System - Backend API

This is the backend API for a Minimal Library Management System, built with Node.js, Express, TypeScript, and MongoDB. It provides comprehensive endpoints for managing books and handling borrowing records.

---

## ✨ Features

- **Full CRUD Functionality for Books:** Create, Read, Update, and Delete books.
- **Advanced Book Queries:** Filter books by genre and sort results.
- **Smart Borrowing System:** Handles book borrowing, updates available copies, and validates requests based on stock.
- **Aggregation Pipeline:** Provides a summarized view of all borrowed books.
- **Type-Safe Code:** Written entirely in **TypeScript**.
- **Schema Validation:** Uses **Mongoose** for robust data validation.
- **Secure Environment:** Manages sensitive information like database credentials using environment variables.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Language:** TypeScript
- **Database:** MongoDB
- **ODM:** Mongoose
- **Environment Management:** dotenv

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following software installed on your system:
- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

### Installation

1.  **Clone the repository:**
    ```bash
    https://github.com/JefrinAkterJui/library-server.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd library-server
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set up environment variables:**
    Create a file named `.env` in the root of your project and add the necessary environment variables. You can use the `.env.example` as a template.
    ```
    # MONGODB_URI=Your_mongodb_uri
    # library-management --user name
    # thPcREHVqkCNdSoq --pass
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The server should now be running on the port you specified in your `.env` file (e.g., `http://localhost:5000`).

---

## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file. Copy the contents of `.env.example` and replace the placeholder values with your actual credentials.

**.env.example**

---

## 📖 API Endpoints

Here are the available API endpoints for this project.

| HTTP Method | Endpoint               | Description                                           |
| :---------- | :--------------------- | :---------------------------------------------------- |
| `POST`      | `/api/books`           | Create a new book.                                    |
| `GET`       | `/api/books`           | Get all books with optional filtering and sorting.    |
| `GET`       | `/api/books/:bookId`   | Get a single book by its ID.                          |
| `PUT`       | `/api/books/:bookId`   | Update a book's information by its ID.                |
| `DELETE`    | `/api/books/:bookId`   | Delete a book by its ID.                              |
| `POST`      | `/api/borrow`          | Borrow a book.                                        |
| `GET`       | `/api/borrow`          | Get an aggregated summary of all borrowed books.      |

---

