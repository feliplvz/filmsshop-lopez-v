import React from "react";
import { Link } from "react-router-dom";
import branch from "../../assets/img/branch.png";
import NavLinks from "./NavLinks";
import CartWidget from "../CartWidget/CartWidget";

import { toggle } from "./hamburger-script";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar__container">
      <nav className="navBar">
        <div id="hamburger" className="hamburger" onClick={toggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <Link to="/">
          {" "}
          <img src={branch} alt="logo"></img>
        </Link>
        <NavLinks />
        <CartWidget />
      </nav>
    </div>
  );
}

export default NavBar;
