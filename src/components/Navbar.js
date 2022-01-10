import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href=""><Link to="home" smooth={true} duration={1000}>Home</Link></a>
          </li>
          <li>
            <a href=""><Link to="about" smooth={true} duration={1000}>About</Link></a>
          </li>
          <li>
            <a href=""><Link to="products" smooth={true} duration={1000}>Products</Link></a>
          </li>
          <li>
            <a href=""><Link to="contact" smooth={true} duration={1000}>Contact</Link></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
