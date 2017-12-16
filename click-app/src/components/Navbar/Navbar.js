import React from "react";
import "./Navbar.css";

const Navbar = props =>(
  <div>
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <h1>Color Clicky Game</h1>
        <p>Click on an image to earn points, but don't click on the same image more than once!  If you do, you will lose all your points and start back at zero points.</p>
          <h2>Current Score: <span className = "score-span">{props.score}</span>
          </h2>
      </div>
    </div>
  </nav>
  </div>
);

export default Navbar;