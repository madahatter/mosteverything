import React, { Component } from 'react';
import './App.css';


var list = []


class App extends Component {
  constructor() {
    super()
    this.state = {counter: 0}
  }

    buttonify = (a) => {
      return (<button>{a} </button>)
    }

  addify = () => {
  var x = <button>Add</button>
  list.push(x)
  this.setState({})
  
}
  render() {

    return (
      <div className="App">
        <button onClick={this.addify}>Add</button>
        <div>{list.map(this.buttonify)}</div>
      </div>
      );
  }
}



export default App;
