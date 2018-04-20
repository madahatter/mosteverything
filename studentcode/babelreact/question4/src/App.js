import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.theNumber = Math.floor(Math.random()*10)
  }
  checkNumber = () => {
    var x = document.getElementById("input").value
    if (x > this.theNumber) {
      return alert("You are too high")
    }
    else if (x < this.theNumber) {
      return alert("You are too low")
    }

    else if (x == this.theNumber) {
      return alert("You got it")
    }
  }
  render() {
    return (
      <div className="App">
      <input id="input"></input>
      <button onClick= {(this.checkNumber)}> Submit </button>
      
            </div>
    );
  }
}

export default App;
