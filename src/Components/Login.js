import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { login } from './userService';
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

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginData.username || !loginData.password) {
      setLoginStatus('Please enter both username and password.');
      return;
    }

    const user = login(loginData.username, loginData.password);

    if (user) {
      setLoginStatus('Login successful!');
      navigate('/Home');
    } else {
      setLoginStatus('Invalid username or password.');
    }
  };

  return (
    <div className="App1">
      <form onSubmit={handleLogin}>
        <h3>LOGIN</h3>
        <br />
        <div className="input-box">
          <label>Username : </label>
          <br />
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
          <label>Password : </label>
          <br />
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
