import React, { Component } from 'react';

import './App.css';

var list = []


class App extends Component {

    lify = (a) => {
      return (<li>{a} </li>)
    }

  addify = () => {
  var x = document.getElementById('input').value
  list.push(x)
  this.setState({})
  document.getElementById('input').value = ""
}

  render() {

    return (
      <div className="App">
        <input id="input" ></input>
        <button onClick={this.addify}>Add</button>
        <div>To Do List<ul>{list.map(this.lify)}</ul></div>
      </div>
      );
  }
}


export default App;
