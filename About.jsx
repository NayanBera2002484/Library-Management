import React from 'react';
import './About.css'; // Optional: Create About.css for styling

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About BBIT Central Library</h1>
        <p>
          The <strong>Central Library of Budge Budge Institute of Technology (BBIT)</strong> is a dedicated resource center located on the <strong>third floor of the Administrative Block</strong>. Spanning an area of <strong>5,000 sq ft</strong>, it is designed to cater to the academic and research needs of students and faculty members.
        </p>

        <h3>Library Highlights:</h3>
        <ul>
          <li><strong>Location:</strong> Third floor of the Administrative Block</li>
          <li><strong>Size:</strong> 5,000 sq ft with a reading room capacity of 180 students</li>
          <li><strong>Collection:</strong> 40,660 books and 3,865 titles</li>
          <li><strong>Classification System:</strong> Dewey Decimal Classification (22nd Edition)</li>
        </ul>

        <h3>Available Services:</h3>
        <ul>
          <li>Circulation and Lending</li>
          <li>Reference Support</li>
          <li>E-Library Access</li>
          <li>Reprographic Services (Xerox and Printing)</li>
          <li>Book Bank Facility</li>
        </ul>

        <h3>Additional Features:</h3>
        <ul>
          <li>Dedicated Digital Laboratory for digitizing old and rare books</li>
        </ul>

        <p>
          The BBIT Central Library stands as a knowledge hub, committed to supporting teaching, research, and extension activities of the institute by providing access to quality resources and services.
        </p>
      </div>
    </div>
  );
};

export default About;
