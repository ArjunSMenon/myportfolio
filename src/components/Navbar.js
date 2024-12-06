import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <div className="Navbar">
      <h1>Navbar</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link></li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar