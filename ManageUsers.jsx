// client/my_app/src/pages/admin/ManageUsers.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Error fetching users", err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/admin/users/${id}`)
      .then(() => setUsers(users.filter(user => user._id !== id)))
      .catch(err => console.error("Delete failed", err));
  };

  return (
    <div className="container mt-5">
      <h2>Manage Users</h2>
      <table className="table table-bordered mt-4">
        <thead className="table-dark">
          <tr>
            <th>URN</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.urn}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(u._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
