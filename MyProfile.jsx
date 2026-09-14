// src/pages/MyProfile.jsx

import React, { useState, useEffect } from "react";
import { getUserProfile, updateUserProfile } from "../service/api";
import { Form, Button, Alert, Spinner } from "react-bootstrap";

const MyProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    phone: ""
  });

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getUserProfile();
        if (res?.data) {
          setFormData(res.data);
        }
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateUserProfile(formData);
      if (res?.data) {
        setSuccess("Profile updated successfully!");
        setError("");
      }
    } catch (err) {
      setError("Failed to update profile.");
      setSuccess("");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-primary mb-4">👤 My Profile</h2>

      {loading ? (
        <div className="text-center"><Spinner animation="border" /></div>
      ) : (
        <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
          {success && <Alert variant="success">{success}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Profile
          </Button>
        </Form>
      )}
    </div>
  );
};

export default MyProfile;
