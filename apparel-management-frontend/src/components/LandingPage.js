import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/SignUp">Register</Link></li>
              <li><Link to="/AddApparel">Add Apparel</Link></li>
              <li><Link to="/ViewApparel">View Apparel</Link></li>
              <li><Link to="/logout">Logout</Link></li>
          </ul>
      </nav>
        <header className="landing-header">
        <h1>Welcome to Apparel Management</h1>
        <p>Your one-stop solution for disposing, donating, or recycling your unused or worn-out apparel.</p>
      </header>
      <section className="features-section">
        <h2>Features</h2>
        <ul>
          <li>Submit your apparel for disposal, donation, or recycling</li>
          <li>Track the status of your submissions</li>
          <li>Get recommendations for sustainable apparel management</li>
        </ul>
      </section>
      <section className="audience-section">
        <h2>Intended Audience</h2>
        <p>Our platform is designed for environmentally conscious individuals who want to manage their apparel responsibly.</p>
      </section>
      <footer className="landing-footer">
        <p>&copy; 2023 Apparel Management. All rights reserved.</p>
        <p>Contact us: <a href="mailto:support@apparelmanagement.com">support@apparelmanagement.com</a></p>
        <p>Follow us on:
          <a href="https://twitter.com/apparelmanagement" target="_blank" rel="noopener noreferrer"> Twitter</a>,
          <a href="https://facebook.com/apparelmanagement" target="_blank" rel="noopener noreferrer"> Facebook</a>,
          <a href="https://instagram.com/apparelmanagement" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </footer>
    </div>
  );
};

export default Landing;