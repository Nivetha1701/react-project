import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Booking from "./Components/Booking";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import About from "./Components/About";
import PaymentForm from "./Components/PaymentForm";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Payment" element={<PaymentForm/>}/>
          <Route path="/Signup" element={<Signup/>}/> 
          <Route path="/Booking" element={<Booking/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;