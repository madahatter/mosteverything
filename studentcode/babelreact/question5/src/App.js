import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {sw: true}
  }
  swithState = ()=> { this.setState({sw: !this.state.sw})

  }
  render() {  
    if (this.state.sw == true){
      return (<button onClick={this.swithState}>Button1</button>)
    }
    return (<button onClick={this.swithState}>Button2</button>)
  }
}

export default App;
