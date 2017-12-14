import React from "react";
import "./ColorCard.css";

const ColorCard = props =>(
  <div className = "card">
    <div className = "img-container">
      <img alt = {props.name} src ={props.image}/>
    </div>

  <span onClick={() => props.randomColors()
  } className = "randomize"
  >
  
  </span>
  </div>
);

export default ColorCard;