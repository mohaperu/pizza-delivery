import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="banner" id="home">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Hut</h3>
            <h1>PIZZERIA</h1>
            <p>
              To be successful in this role, you should have experience with various pizza types and be available to work during business hours.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                <Link to="contact" smooth={true} duration={1000}>DELIVERY NOW</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
