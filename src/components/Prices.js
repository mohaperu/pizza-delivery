import React from "react";
import { Link } from "react-scroll";

const Prices = () => {

  const items = [
    {
      img: "/img/pizza1.png",
      name: "Pepperoni Pizza",
      price: "$50.00"
    },
    {
      img: "/img/pizza2.png",
      name: "Pizza Margeritta",
      price: "$25.00"
    },
    {
      img: "/img/pizza3.png",
      name: "Veg Pizza",
      price: "$150.00"
    },
    {
      img: "/img/pizza4.png",
      name: "Classic Cheese Pizza",
      price: "$22.00"
    },
    {
      img: "/img/pizza5.png",
      name: "Double Cheese Margeritta",
      price: "$22.00"
    },
    {
      img: "/img/pizza6.png",
      name: "Veg Loaded Pizza",
      price: "$22.00"
    }
  ]

  return (
    <div className="prices" id="products">
      <div id="product-title"><p>PRODUCTS</p></div>

      <div className="container">
        <div className="row">
          {items.map(data =>
            <div className="col-4">
              <div className="price">
                <div className="price__img">
                  <img src={data.img} alt="pizza" />
                </div>
                <h1 className="price__heading">{data.name}</h1>
                <p className="price__text">
                  a dish made typically of flattened bread dough spread with a savory mixture usually including tomatoes and cheese and often other toppings and baked.
                </p>
                <p className="price_rs">{data.price}</p>
                <button className="book-button"><Link to="contact" smooth={true} duration={1000}>Book Now</Link></button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Prices;
