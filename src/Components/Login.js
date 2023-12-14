import React from 'react';
import './Login.css';

function Login({onNavigate}) {
  const handleNavigate=()=>{
    if(onNavigate){
      onNavigate();
    }
  }
  return (
    <div className="App1">
      <form action="">
        <h3>LOGIN</h3>
        <br></br>
        <div className="input-box">
            <label>UserName :</label>
          <input type="text" placeholder="Enter Username" required/>
        </div>
        <br></br>
        <div className="input-box">
            <label>Password :</label>
          <input type="password" placeholder="Enter Password" required/>
        </div>
        <br></br>
        <button type="submit">Login</button>
      </form>
          <p>Don't have an account ? </p>
        <span onClick={handleNavigate}><font color="blue"> Signup</font></span>
    </div>
  );
}

export default Login;
