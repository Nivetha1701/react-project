import React from 'react';
import './Signup.css';
function Signup({onNavigate}) {
  const handleNavigate=()=>{
    if(onNavigate){
      onNavigate();
    }
  };
  return (
    <div className="App">
      <form action="">
        <h3>SIGN UP</h3>
        <br></br>
        <div className="input-box">
            <label>UserName : </label>
          <input type="text" placeholder="Enter Username" required/>
        </div>
        <br></br>
        <div className="input-box">
            <label>Date of Birth :</label>
          <input type="date" placeholder="Date of Birth" required/>
        </div>
        <br></br>
        <div className="input-box">
            <label>Mobile Number :</label>
          <input type="text" placeholder="Enter Mobile Number" required/>
        </div>
        <br></br>   
        <div className="input-box">
            <label>Email address :</label>
          <input type="email" placeholder="Enter Email address" required/>
        </div>
        <br></br>
        <div className="input-box">
            <label>Password :</label>
          <input type="password" placeholder="Enter password" required/>
        </div>
        <button type="submit">SIGNUP</button>
      </form>
      <p>
        <h3>Already have an account? 
        <span onClick={handleNavigate} ><font color="blue"> Login</font></span></h3>
      </p>
    </div>
  );
}

export default Signup;