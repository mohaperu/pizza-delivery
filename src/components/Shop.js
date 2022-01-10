import React from "react";
import { Link } from "react-scroll";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__text">
          <div>
            <h1>Free Delivery With PIZZA OF THE DAY Only 8.99 USD</h1>
            <div className="shop__btn">
              <a href="" className="btn btn-smart">
                <Link to="products" smooth={true} duration={1000} >SHOP NOW</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
