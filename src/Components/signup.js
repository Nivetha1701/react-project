// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: '',
    dateOfBirth: '',
    mobileNumber: '',
    emailAddress: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password' && value.length < 5) {
      setError('Password must have at least 5 characters.');
    } else {
      setError('');
    }

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/signup', userData);

      if (response.data.success) {
        alert('User signed up successfully!');
        navigate('/Login');
      } else {
        setError(response.data.message);
        console.error('Signup error:', response.data.message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('An error occurred while trying to sign up.');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSignup}>
        <h3>SIGN UP</h3>
        <div className="input-box">
          <label>Username:</label>
          <TextField
            className="boxx"
            variant="outlined"
            label="Enter Username"
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <div className="input-box">
          <label>Date of Birth:</label>
          <TextField
            className="boxx"
            variant="outlined"
            type="date"
            name="dateOfBirth"
            value={userData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <div className="input-box">
          <label>Mobile Number:</label>
          <TextField
            className="boxx"
            variant="outlined"
            label="Enter Mobile Number"
            type="number"
            name="mobileNumber"
            value={userData.mobileNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <div className="input-box">
          <label>Email address:</label>
          <TextField
            className="boxx"
            variant="outlined"
            label="Enter Email address"
            type="email"
            name="emailAddress"
            value={userData.emailAddress}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <div className="input-box">
          <label>Password:</label>
          <TextField
            className="boxx"
            variant="outlined"
            label="Enter Password"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">SIGN UP</button>
      </form>
      <p>
        <h3>
          Already have an account? <Link to="/Login">Login</Link>
        </h3>
      </p>
    </div>
  );
}

export default Signup;
