import React from "react";
import "./ColorCard.css";

const ColorCard = props =>(
  <div className = "card">
    <div className = "img-container">
      <img id = {props.id} onClick = {props.alertHere} alt = {props.name} src ={props.image}/>
    </div>
  </div>
);

export default ColorCard;