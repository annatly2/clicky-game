import React from "react";
import "./Navbar.css";

const Navbar = props =>(
  <div>
    <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Color Clicky Game</a>
        <ul class="nav navbar-nav">
          <li>Score:</li>
          <li>Top Score:</li>
        </ul>

      </div>
    </div>
  </nav>
  </div>

);

export default Navbar;