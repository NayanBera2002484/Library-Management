// src/pages/BookSuggestions.jsx

import React, { useState } from "react";
import Swal from "sweetalert2";

const BookSuggestions = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example POST request to backend
    try {
      // await axios.post("/api/suggestions", formData); // Replace with actual API
      Swal.fire("Thank you!", "Your suggestion has been submitted.", "success");
      setFormData({ title: "", author: "", isbn: "", reason: "" });
    } catch (error) {
      Swal.fire("Error", "Failed to submit suggestion", "error");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-success mb-4">📖 Suggest a Book</h2>
      <p className="text-muted">Recommend a book you think should be added to the BBIT Central Library.</p>

      <form onSubmit={handleSubmit} className="shadow-sm p-4 bg-light rounded">
        <div className="mb-3">
          <label className="form-label">Book Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Atomic Habits"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            required
            value={formData.author}
            onChange={handleChange}
            placeholder="e.g. James Clear"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">ISBN (optional)</label>
          <input
            type="text"
            className="form-control"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            placeholder="e.g. 978-0735211292"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Why should we add this book?</label>
          <textarea
            className="form-control"
            name="reason"
            required
            value={formData.reason}
            onChange={handleChange}
            rows="3"
            placeholder="Mention the importance or use of the book."
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit Suggestion
        </button>
      </form>
    </div>
  );
};

export default BookSuggestions;
