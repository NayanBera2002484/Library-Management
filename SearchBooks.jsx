import React, { useState } from "react";
import { searchBooks } from "../service/api";

export default function SearchBook() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const res = await searchBooks(query);
      setResults(res.data);
      setSearched(true);
    } catch (error) {
      console.error("Search failed", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim() === "") {
      setResults([]);
      setSearched(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🔍 Search Book</h2>

      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter title, author or ISBN"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {results.length > 0 && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>📚 Title</th>
              <th>✍️ Author</th>
              <th>🔢 ISBN</th>
              <th>🏷️ Genre</th>
              <th>📅 Published</th>
            </tr>
          </thead>
          <tbody>
            {results.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.genre}</td>
                <td>{book.published}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {searched && results.length === 0 && (
        <div className="alert alert-warning text-center">
          No books found for "<strong>{query}</strong>"
        </div>
      )}
    </div>
  );
}
