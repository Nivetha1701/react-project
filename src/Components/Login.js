import React from 'react';
import './Login.css';
import {Link,BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import '@mui/material';

function Login() {
  return (
    <div className="App1">
      <form action="">
        <h3>LOGIN</h3>
        <br></br>
        <div className="input-box">
          <label>Username : </label>
          <br></br>
        <TextField className="inbox" variant="outlined" label="Enter Username" type="email" required/>
        </div>
        <br></br>
        <div className="input-box">
            <label>Password : </label>
            <br></br>
       <TextField className="inbox" variant="outlined" label="Password" type="password" required/>
       <br></br>
        </div>
        <br></br>
        <Link to="/Home"><button type="submit">Login</button></Link>
          
      </form>
          <p>Don't have an account ? </p>
          <Link to="/Signup">Signup</Link>
    </div>
  );
}

export default Login;
