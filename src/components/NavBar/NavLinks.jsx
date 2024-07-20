import React from "react";
import { Link } from "react-router-dom";
import { linkToggle } from "./hamburger-script";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavLinks() {
  return (
    <ul id="menu" className="navBar__menu">
      <li>
        <Link className="link" onClick={linkToggle} to="/category/movies">
          Peliculas
        </Link>
      </li>
      <li>
        <Link onClick={linkToggle} to="/category/series">
          Series
        </Link>
      </li>
      <li>
        <Link onClick={linkToggle} to="/category/anime">
          Anime
        </Link>
      </li>
      <li>
        <Link onClick={linkToggle} to="/category/estrenos">
          Estrenos
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
