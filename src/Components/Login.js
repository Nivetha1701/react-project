import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [loginStatus, setLoginStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', loginData);

      if (response.data.success) {
        setLoginStatus('Login successful!');
        navigate('/Home');
      } else {
        setLoginStatus('Invalid username or password.');
        console.error('Login error:', response.data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginStatus('An error occurred while trying to log in.');
    }
  };

  return (
    <div className="App1">
      <form onSubmit={handleLogin}>
        <h3>LOGIN</h3>
        <br />
        <div className="input-box">
          <label>Username:</label>
          <TextField
            className="inbox"
            variant="outlined"
            label="Enter Username"
            type="email"
            name="username"
            value={loginData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <div className="input-box">
          <label>Password:</label>
          <TextField
            className="inbox"
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            required
          />
          <br />
        </div>
        <br />
        <button type="submit">Login</button>
        {loginStatus && <p>{loginStatus}</p>}
      </form>
      <p>Don't have an account? </p>
      <Link to="/Signup">Signup</Link>
    </div>
  );
}

export default Login;
