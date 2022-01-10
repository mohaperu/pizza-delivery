import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
      <Contact/>
    </div>
  );
}

export default App;
