// src/pages/ReadingHistory.jsx

import React, { useEffect, useState } from "react";
import { getReadingHistory } from "../service/api";

const ReadingHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await getReadingHistory(); // Replace with your API
        if (res?.data) {
          setHistory(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch reading history", err);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-success mb-4">📚 Reading History</h2>

      {history.length > 0 ? (
        <div className="table-responsive shadow-sm rounded">
          <table className="table table-bordered table-hover">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Borrowed Date</th>
                <th>Returned Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((book, index) => (
                <tr key={book.id || index}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>{book.borrowedDate}</td>
                  <td>{book.returnedDate || "Not returned"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-muted">You haven’t borrowed any books yet.</p>
      )}
    </div>
  );
};

export default ReadingHistory;
