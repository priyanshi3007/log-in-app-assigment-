import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/account');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div className="mt-3">
        <Link to="/forgot-password" className="link-primary">Forgot Password?</Link>
      </div>
      <div className="mt-3">
        <Link to="/register" className="link-primary">New user? Register here</Link>
      </div>
    </div>
  );
};

export default Login;
