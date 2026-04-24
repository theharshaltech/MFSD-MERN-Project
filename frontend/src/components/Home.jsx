import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="auth-container">
      <div className="auth-card" style={{ textAlign: 'center' }}>
        <h1 className="auth-title">Home Page</h1>
        <p className="auth-subtitle">You are successfully logged in!</p>
        <Link to="/signin" className="auth-button" style={{ display: 'inline-block', textDecoration: 'none' }}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Home;
