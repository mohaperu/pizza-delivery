import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO PIZZERIA</h1>
            <p>
            To be successful in this role, you should have experience with various pizza types and be available to work during business hours.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                <Link to="products" smooth={true} duration={1000}>SHOW PRODUCTS</Link>
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
