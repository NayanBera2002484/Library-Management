import React, { useState } from "react";

const UserProfile = () => {
  // Dummy user data – replace with real data from backend
  const [user, setUser] = useState({
    name: "Saswata Das",
    email: "dasdas12345@gmail.com",
    phone: "0000000000",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated user:", user);
    alert("Profile updated successfully!");
    // Replace with API call to update profile
  };

  return (
    <div className="container mt-5">
      <h3>👤 My Profile</h3>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="name" value={user.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="tel" className="form-control" name="phone" value={user.phone} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
