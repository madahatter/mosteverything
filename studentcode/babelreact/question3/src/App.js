import React, { Component } from 'react';
import './App.css';

class App extends Component {

 checkNumber = () => {
   var x = document.getElementById("input").value
    if(x === "42") {
      return alert("You have guessed correctly")}
      else {
        return alert("Try again")
      }
    }
    render() {
    return (
      <div className="App">
        <form id="form1"><input id="input"></input></form>

        <button onClick= {this.checkNumber} >Submit</button>
      </div>
    );
  }
}

export default App;
