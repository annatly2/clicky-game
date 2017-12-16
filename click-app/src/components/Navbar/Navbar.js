import React from "react";
import "./Navbar.css";

const Navbar = props =>(
  <div>
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <div className="navbar-brand">Color Clicky Game</div>
          <h1>Score: <div className = "score-span">{props.score}</div></h1>
      </div>
    </div>
  </nav>
  </div>
);

export default Navbar;