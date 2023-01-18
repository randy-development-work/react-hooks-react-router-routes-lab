import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
      <li><NavLink 
        to="/"
        exact
      >
        Home
      </NavLink> </li>
      <li><NavLink 
        to="/movies"
        exact
      >
        Movies
      </NavLink></li>
      <li><NavLink 
        to="/directors"
        exact
      >
        Directors
      </NavLink></li>
      <li><NavLink 
        to="/actors"
        exact
      >
        Actors
      </NavLink></li>
      </ul>
    </div>
  
  );
}

export default NavBar;
