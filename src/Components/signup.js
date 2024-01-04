import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import './Signup.css';
import { signup } from './userService';

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

  const handleInputChange = (e) =>
   {
    const { name, value } = e.target;
    if (name === 'password' && value.length < 5) 
    {
      setError('Password must have at least 5 characters.');
    }
    else 
    {
      setError('');
    }

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!userData.username || !userData.dateOfBirth || !userData.mobileNumber || !userData.emailAddress || !userData.password) {
      setError('Please fill in all fields.');
      return;
    }

    if (userData.password.length < 5) {
      setError('Password must have at least 5 characters.');
      return;
    }

    setError('');
    signup(userData);

    alert('User signed up:', userData);
    navigate('/Login');
  };

  return (
    <div className="App">
      <form onSubmit={handleSignup}>
        <h3>SIGN UP</h3>
        <div className="input-box">
          <label>UserName :</label>
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
          <label>Date of Birth :</label>
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
          <label>Mobile Number :</label>
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
          <label>Email address :</label>
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
          <label>Password :</label>
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
        <button type="submit">SIGNUP</button>
      </form>
      <p>
        <h3>
          Already have an account? <Link to="/Login"> Login</Link>
        </h3>
      </p>
    </div>
  );
}

export default Signup;
