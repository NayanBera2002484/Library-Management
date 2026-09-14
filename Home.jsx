import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container text-white d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="display-4 fw-bold mb-4">📖 Welcome to the Library</h1>
        <p className="lead mb-5">The Budge Budge Institute of Technology (BBIT) library, a part of the college's academic infrastructure, plays a vital role in supporting the institution's academic activities. BBIT's central library houses a collection of 48,648 books and 4,438 titles. The library is a key component of the college's infrastructure, which also includes various labs like a Fluid Dynamics Lab and a Soft Skill Language Lab. </p>
        <Link to="/login" className="btn btn-primary btn-lg mx-2">Login</Link>
        <Link to="/register" className="btn btn-outline-light btn-lg mx-2">Register</Link>
      </div>
    </div>
  );
};

export default Home;
