import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../../service/api'; // Make sure this is defined

const AddBook = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: '',
    genre: '',
    published: ''
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const submitBook = async (e) => {
    e.preventDefault();

    const { title, author, isbn, genre, published } = book;

    if (!title || !author || !isbn || !genre || !published) {
      Swal.fire({
        icon: 'warning',
        title: 'All fields are required!',
      });
      return;
    }

    try {
      const res = await addBook(book);
      if (res.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Book added successfully!',
        });

        // Redirect to ViewBooks page after 2 seconds
        setTimeout(() => {
          navigate('/viewbook');
        }, 2000);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Something went wrong while adding the book.',
        });
      }
    } catch (error) {
      console.error('Add Book Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Server error while adding book.',
      });
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">📚 Add Book</h2>
              <form onSubmit={submitBook}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Book Title</label>
                  <input type="text" className="form-control" name="title" onChange={handleChange} value={book.title} />
                </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">Author</label>
                  <input type="text" className="form-control" name="author" onChange={handleChange} value={book.author} />
                </div>
                <div className="mb-3">
                  <label htmlFor="isbn" className="form-label">ISBN</label>
                  <input type="text" className="form-control" name="isbn" onChange={handleChange} value={book.isbn} />
                </div>
                <div className="mb-3">
                  <label htmlFor="genre" className="form-label">Genre</label>
                  <input type="text" className="form-control" name="genre" onChange={handleChange} value={book.genre} />
                </div>
                <div className="mb-3">
                  <label htmlFor="published" className="form-label">Published Year</label>
                  <input type="text" className="form-control" name="published" onChange={handleChange} value={book.published} />
                </div>
                <button type="submit" className="btn btn-success w-100">Add Book</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
