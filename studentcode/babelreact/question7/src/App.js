import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {time: null}
    
    setInterval(()=> {if (this.state.time > 0){this.setState({time: this.state.time - 1})}}, 1000)
    
  }
  counter = () => {
var x = document.getElementById('input').value 
this.setState({time: x})  
}


  render() {
    return (
      <div className="App">
      <div id="countdown">{this.state.time}</div>
<input id="input"></input>
<button onClick= {this.counter}>Start Countdown</button>
      </div>
    );
  }
}

export default App;
