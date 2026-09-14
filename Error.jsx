import React from 'react';
import { Link } from 'react-router-dom';


export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="display-3 fw-bold text-danger">404</h1>
      <h2 className="h4 mb-3">Oops! Page not found.</h2>
      <p className="mb-4 text-muted" style={{ maxWidth: 400 }}>
        The URL you entered doesn’t correspond to any page in this site. Check
        the address or click the button below to return home.
      </p>

      <Link to="/" className="btn btn-primary px-4">
        ⬅︎ Back to Home
      </Link>
    </div>
  );
}
