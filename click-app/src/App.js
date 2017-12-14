import React, { Component } from 'react';
import ColorCard from "./components/ColorCard/ColorCard";
import Navbar from "./components/Navbar/Navbar"
import colors from "./colors.json";
import './App.css';

class App extends Component {

  state = {
    colors
  };

  // random function here


  render() {
    return (
      <div>
        <Navbar></Navbar>
        {this.state.colors.map(color =>(
          <ColorCard
          //randomize function
          id = {color.id}
          name = {color.name}
          image ={color.image}
          />

      ))}
      </div>
    );
  }
}

export default App;
