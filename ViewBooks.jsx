import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function ViewBooks() {
  const [books, setBooks] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('Books')) || [];
    setBooks(stored);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Book Catalogue</h2>

      <div className="d-flex justify-content-end mb-3">
        <Link to="/public" className="btn btn-primary">
          + Add / Edit Books
        </Link>
      </div>

      {books.length ? (
        <div className="table-responsive">
          <table className="table table-striped table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Genre</th>
                <th>Published</th>
              </tr>
            </thead>
            <tbody>
              {books.map((b) => (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>{b.title}</td>
                  <td>{b.author}</td>
                  <td>{b.isbn}</td>
                  <td>{b.genre}</td>
                  <td>{b.published}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No books added yet.</p>
      )}
    </div>
  );
}