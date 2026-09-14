// src/pages/admin/AdminProfileSettings.jsx

import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const AdminProfileSettings = () => {
  const [formData, setFormData] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    phone: "9876543210",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Submit updated admin data (replace with actual API call)
    console.log("Updated Admin Info:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="container py-5">
      <h2 className="text-success mb-4">👤 Admin Profile Settings</h2>

      <Card className="p-4 shadow-sm">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </Form.Group>

          <hr />

          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Leave blank to keep unchanged"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Update Profile
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AdminProfileSettings;
