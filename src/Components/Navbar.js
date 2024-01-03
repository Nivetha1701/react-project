import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">EVENT<Icons.FaCannabis/>
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => (
            <li key={item.id} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
