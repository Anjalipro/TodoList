import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  
  return (
    <div className="navbar">
      
      
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
       
        <Link to="/counter">Counter</Link>
        
       
      </div>
      
    </div>
  );
}

export default Navbar;