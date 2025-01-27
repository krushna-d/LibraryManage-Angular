# Library Management System

This is a simple Library Management System built using Angular. The system allows users to:

1. View a list of books.
2. Search for books by title or author.
3. Add new books.
4. Edit existing books.
5. Delete books from the list.

The app uses a JSON Server backend to manage books.

---

## **Workflow**

### **1. Home Page (Book List)**
- Displays a table of all books.
- Includes a search bar to filter books by title or author.
- Provides "Edit" and "Delete" options for each book.
- Has an "Add Book" button to navigate to the add book form.

### **2. Add Book Page**
- A form to add a new book with the following fields:
  - Title
  - Author
  - ISBN
  - Availability (checkbox)
- On submission, the new book is added to the list in the JSON Server backend, and the user is redirected to the home page.
- Includes a "Cancel" button to return to the home page without making changes.

### **3. Edit Book Page**
- Similar to the Add Book page but pre-populates the form with the details of the selected book.
- Allows users to update the book details.
- On submission, the changes are saved to the JSON Server backend, and the user is redirected to the home page.

### **4. Search Functionality**
- A search bar on the home page allows users to filter the book list in real-time.
- Books can be searched by title or author (case-insensitive).

---

## **Project Structure**

```
src/
├── app/
│   ├── book-list/         # Book List Component (Home Page)
│   │   ├── book-list.component.ts
│   │   ├── book-list.component.html
│   │   ├── book-list.component.css
│   ├── book-form/         # Add/Edit Book Component
│   │   ├── book-form.component.ts
│   │   ├── book-form.component.html
│   │   ├── book-form.component.css
│   ├── book.service.ts    # Service for managing books
│   ├── app.component.ts   # Root component
│   ├── app-routing.module.ts # Routing configuration
```

---

## **How to Run the Application**

### **Prerequisites**
- Node.js installed on your system.
- Angular CLI installed globally. To install Angular CLI, run:
  ```bash
  npm install -g @angular/cli
  ```
- JSON Server installed globally. To install JSON Server, run:
  ```bash
  npm install -g json-server
  ```

### **Steps to Run**

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd library-management
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start JSON Server**
   - Create a `db.json` file in the project root with the following content:
     ```json
     {
       "books": [
         { "id": 1, "title": "Angular Basics", "author": "John Doe", "isbn": "123456", "available": true },
         { "id": 2, "title": "Advanced Angular", "author": "Jane Smith", "isbn": "654321", "available": false }
       ]
     }
     ```
   - Start the JSON Server:
     ```bash
     json-server --watch db.json
     ```
   - The server will be available at `http://localhost:3000`.

4. **Start the Angular Application**
   ```bash
   ng serve
   ```
   The app will be available at `http://localhost:4200`.

---

## **Key Features**

### **Book Service**
- Communicates with the JSON Server backend.
- Provides methods to:
  - Get all books from the backend.
  - Get a book by ID from the backend.
  - Add a new book to the backend.
  - Update an existing book in the backend.
  - Delete a book from the backend.

### **Real-Time Search**
- Filters the book list as the user types in the search bar.
- Searches by title or author, case-insensitive.

### **Form Validation**
- Ensures all required fields (title, author, ISBN) are filled out before submission.
- Provides visual feedback for invalid fields.

### **Dynamic Routing**
- Uses Angular Router to navigate between pages (home, add book, edit book).
- Supports route parameters for editing a specific book.

---

## **Future Enhancements**

1. Add pagination for the book list.
2. Add sorting functionality (by title, author, etc.).
3. Include additional fields for books (e.g., genre, publication date).
4. Improve UI/UX with a modern design library (e.g., Angular Material or Tailwind CSS).

---

Feel free to contribute to this project by creating issues or submitting pull requests!
