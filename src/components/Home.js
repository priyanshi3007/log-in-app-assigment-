import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to the Account Manager</h2>
      <Link to="/login" className="btn btn-primary m-2">Login</Link>
      <Link to="/register" className="btn btn-secondary m-2">Register</Link>
    </div>
  );
};

export default Home;
