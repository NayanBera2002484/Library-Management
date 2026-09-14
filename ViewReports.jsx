// client/my_app/src/pages/admin/ViewReports.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get("/api/reports")
      .then(res => setReports(res.data))
      .catch(err => console.error("Error fetching reports", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>View Reports</h2>
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>Report Type</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(r => (
            <tr key={r._id}>
              <td>{r.type}</td>
              <td>{r.description}</td>
              <td>{new Date(r.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewReports;
