import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {firstName: '', lastName: ''};
  }
 
  handleFnameChange = (event) => {
    this.setState({firstName: event.target.value});
  }
  handleLnameChange = (event) => {
  this.setState({lastName: event.target.value})
  }
  handleSubmit = (event) => {
    alert('Hello ' + this.state.firstName + ' ' + this.state.lastName);
    event.preventDefault();
  }

  resetForm = ()=> {
    this.setState({firstName: '', lastName: ''})

  }
  nameSwap = ()=> {
    let x = this.state.lastName
    let y = this.state.firstName
    this.setState({firstName: x, lastName: y})
  }

  render = () => {
    const { firstName, lastName } = this.state;
    const isEnabled =
          firstName.length > 0 &&
          lastName.length > 0;

    var buttonSignUp = this.state.firstName !== '' && this.state.lastName !== '' ?  <button onClick={this.handleSubmit}>Sign up</button> : <div></div>
      
    return (
      <div>
        <form >
            <label>First Name:</label>
            <input type="fname" value={this.state.firstName} onChange={this.handleFnameChange} />
            <label>Last Name: </label>
            <input type="lname" value={this.state.lastName} onChange={this.handleLnameChange} />
            {buttonSignUp}
        </form>
        <button onClick={this.resetForm}>Reset Form</button>
        <button onClick={this.nameSwap}>Swap Names</button>
      </div>

    );
  }
 }

export default App;
