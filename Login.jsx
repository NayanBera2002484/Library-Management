import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", role: "User" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      const { user, token } = res.data;

      // Check if selected role matches actual user role
      if (user.role !== formData.role) {
        Swal.fire({
          icon: "error",
          title: "Role Mismatch",
          text: `You selected ${formData.role}, but your account is ${user.role}`,
        });
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome ${user.name}`,
      });

      // Redirect based on role
      if (user.role === "Admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Invalid credentials",
        text: "Please check your email and password",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-4 rounded bg-light">
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
                value={formData.password}
                required
              />
            </div>
            <div className="mb-3">
              <label>Login as</label>
              <select
                className="form-select"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
