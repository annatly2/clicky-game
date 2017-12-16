import React, { Component } from 'react';
import ColorCard from './components/ColorCard/ColorCard';
import Navbar from './components/Navbar';
import colors from './colors.json';
import './App.css';

class App extends Component {
//setting state
  state = {
    colors,
    Score: 0,
    colorsClicked: []
  };

  gameLogic = id =>{
    console.log(id.target.id);
    //if the color card clicked is not in the colorsClicked array,
    if(this.state.colorsClicked.includes(id.target.id)=== false){
      //increase the score by 1
      //and add the id of the color clicked into the colorsClicked array
      this.setState(
        {
          Score: this.state.Score + 1,
          colorsClicked: [...this.state.colorsClicked, id.target.id]
        })
        //if it is in the colorsClicked array, reset score to 0 and empty the array
    }else{
      this.setState(
        {
          Score: 0,
          colorsClicked: []
        }
      )}
    this.randomizeColors();
  };
//function to shuffle colors and setting the state of the colors to the shuffled colors
  randomizeColors = id =>{
    
    this.setState(
      {
        colors: this.shuffle(this.state.colors)
      })
  };

//function to shuffle
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
  };

//map over this.state.colors and render a ColorCard component for each color object
  render() {
    return (
      <div>
        <Navbar score = {this.state.Score}></Navbar>
        {this.state.colors.map(color =>(
          <ColorCard
          gameLogic = {this.gameLogic}
          id = {color.id}
          name = {color.name}
          image ={color.image}
          />
      ))}
      </div>
    );
  }};

export default App;
