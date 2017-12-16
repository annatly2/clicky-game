import React, { Component } from 'react';
import ColorCard from "./components/ColorCard/ColorCard";
import Navbar from "./components/Navbar"
import colors from "./colors.json";
import "./App.css";
import "./components/Score/Score"
//import colorsclicked
//import topscore

class App extends Component {

  state = {
    colors,
    Score: 0,
    colorsClicked: []
  };

  alertHere = id =>{
    // alert("You clicked this!");
    console.log(id.target.id);
    if(this.state.colorsClicked.includes(id.target.id)=== false){
      this.setState(
        {
          Score: this.state.Score + 1,
          colorsClicked: [...this.state.colorsClicked, id.target.id]
        }
      )
    }else{
      this.setState(
        {
          Score: 0,
          colorsClicked: []
        }
      )
    }
    this.randomColors();
  };


  randomColors = id =>{
    
    this.setState(
      {
        colors: this.shuffle(this.state.colors)
      }
    )
  }

  shuffle = (array)=>{
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  render() {
    return (
      <div>
        <Navbar score = {this.state.Score}></Navbar>
        {this.state.colors.map(color =>(
          <ColorCard
          //randomize function
          alertHere = {this.alertHere}
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
