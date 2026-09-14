import React, { useEffect, useState } from 'react';
import { getAllBooks, deleteBook } from '../../service/api';
import { Link } from 'react-router-dom';

const ViewBooks = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await getAllBooks();
    if (res?.data) {
      setBooks(res.data);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    await deleteBook(id);
    fetchBooks(); // Refresh the list after deletion
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📚 All Books</h2>

      <div className="d-flex justify-content-end mb-3">
        <Link to="/addbook" className="btn btn-primary">➕ Add Book</Link>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Title</th><th>Author</th><th>ISBN</th><th>Genre</th><th>Published</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book.title}</td><td>{book.author}</td><td>{book.isbn}</td>
              <td>{book.genre}</td><td>{book.published}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(book._id)}>Delete</button>
              </td>
            </tr>
          ))}
          {books.length === 0 && <tr><td colSpan="6" className="text-center">No books found.</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBooks;
