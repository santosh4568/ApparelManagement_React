import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/SignUp.css';

const SignUp = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if (response.ok) {
        alert('User registered successfully');
        navigate('/login');
      } else {
        alert('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to register user');
    }
  };


  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p>Already have an Account ? <a href={'/login'}>Login</a></p>
      </div>
    </div>
  );
};

export default SignUp;