import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <h2>Adventure</h2>
        <span>.</span>
        <span>com</span>
      </div>
      <div className="navbar__right">
        <p>Join</p>
      </div>
    </div>
  );
}

export default Navbar;
