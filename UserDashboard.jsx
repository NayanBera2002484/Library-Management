import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/"; // or use navigate('/')
  };
  
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome User</h2>
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right me-2"></i>Logout
        </button>
      </div>

      <div className="row g-4">
        {/* My Books */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <i className="bi bi-journal-bookmark-fill display-4 text-primary mb-3"></i>
              <h5 className="card-title">My Books</h5>
              <p className="card-text">See your issued books and due dates.</p>
              <Link to="/my-books" className="btn btn-outline-success">View</Link>
            </div>
          </div>
        </div>

        {/* Search Books */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <i className="bi bi-search display-4 text-primary mb-3"></i>
              <h5 className="card-title">Search Books</h5>
              <p className="card-text">Browse our full catalog of books.</p>
              <Link to="/searchbook" className="btn btn-outline-success">Search</Link>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <i className="bi bi-person-circle display-4 text-primary mb-3"></i>
              <h5 className="card-title">My Profile</h5>
              <p className="card-text">Manage your profile and update details.</p>
              <Link to="/profile" className="btn btn-outline-success">Profile</Link>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <i className="bi bi-bell-fill display-4 text-primary mb-3"></i>
              <h5 className="card-title">Notifications</h5>
              <p className="card-text">Get alerts for due dates and new arrivals.</p>
              <Link to="/notifications" className="btn btn-outline-success">View Alerts</Link>
            </div>
          </div>
        </div>

        {/* Reading History */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <i className="bi bi-clock-history display-4 text-primary mb-3"></i>
              <h5 className="card-title">Reading History</h5>
              <p className="card-text">Check your previously borrowed books.</p>
              <Link to="/Reading-History" className="btn btn-outline-success">History</Link>
            </div>
          </div>
        </div>

        {/* Book Suggestions */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <i className="bi bi-lightbulb-fill display-4 text-primary mb-3"></i>
              <h5 className="card-title">Book Suggestions</h5>
              <p className="card-text">Recommend a book for the library.</p>
              <Link to="/suggestive-book" className="btn btn-outline-success">Suggest</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
