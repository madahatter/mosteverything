import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      sw1: false,
      sw2: false
    }
  }
  switchState1 = () =>{
    this.setState({sw1 : !this.state.sw1})
  }
  switchState2 = () =>{
    this.setState({sw2 : !this.state.sw2})
  }
  render(){
    console.log(this.state.sw)

    return(
      <div style={{display: 'flex'}}>
      <button onClick={this.switchState1}>Toggle Left</button>
      <button onClick={this.switchState2}>Toggle Right</button>
      {(()=>{if(this.state.sw1 === true){return(<div><Child1/></div>)}})()}
      {(()=>{if(this.state.sw2 === true){return(<div><Child2/></div>)}})()}
      </div>
    )
  }
}

// <Child1/>
// <Child2/>
class Child1 extends Component {
  constructor() {
    super()
    this.state = {name : "",inputContents: "", msgs: []}
  }
  

randFredAnswers = () => {
  var fredAnswers = ["fuck off", "youre boring", "no thanks"]
  var randomNumber = Math.floor(Math.random() * fredAnswers.length)
  var newAnswer = "Fred : " +  fredAnswers[randomNumber]
  var tempArr = this.state.msgs
  tempArr.push(newAnswer)
  this.setState({
    msgs : tempArr
  })
}

  handleSubmit = (event) =>{
    let contents = this.state.inputContents
    var newMsg = this.state.name+" : "+contents
    var tempMsgs = this.state.msgs
    tempMsgs.push(newMsg)
    this.setState({
      msgs : tempMsgs,
      inputContents : ''
    })

    setTimeout(this.randFredAnswers,1000) 
    event.preventDefault()
  }
  handleChange = (event) =>{
    this.setState({inputContents: event.target.value})
  }

  componentWillMount() {
    var prompt_ = prompt("please enter your name")
    this.setState({name : prompt_})

  }
  render() {

    console.log(this.state)
    var msgsList = this.state.msgs.map((el,id)=>{
      return(<li key={id}>{el}</li>)
    })

    return (
      <div>
        <ul style={{"list-style-type":"none"}}>
          {msgsList}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputContents} onChange={this.handleChange}/>
            <input type="submit" />
            </form> 

      </div>
    );
  }
}


class Child2 extends Component {
  constructor() {
    super()
    this.state = {name : "",inputContents: "", msgs: []}
  }
  
  randBobAnswers = () => {
    var bobAnswers = ["fuck off", "youre boring", "no thanks"]
    var randomNumber = Math.floor(Math.random() * bobAnswers.length)
    var newAnswer = "Bob : " +  bobAnswers[randomNumber]
    console.log(bobAnswers)
    var tempArr = this.state.msgs
    tempArr.push(newAnswer)
    this.setState({
      msgs : tempArr
    })
}

  handleSubmit = (event) =>{
    let contents = this.state.inputContents 
    var newMsg = this.state.name+" : "+contents
    var tempMsgs = this.state.msgs
    tempMsgs.push(newMsg)
    this.setState({
      msgs : tempMsgs,
      inputContents : ''
    })
    setTimeout(this.randBobAnswers,1000) 

    event.preventDefault()
  }
  handleChange = (event) =>{
    this.setState({inputContents: event.target.value})
  }

  componentWillMount() {
    var prompt_ = prompt("please enter your name")
    this.setState({name : prompt_})
  }
  render() {

    console.log(this.state)
    var msgsList = this.state.msgs.map((el,id)=>{
      return(<li key={id}>{el}</li>)
    })

    return (
      <div>
        <ul style={{"list-style-type":"none"}}>
          {msgsList}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputContents} onChange={this.handleChange}/>
            <input type="submit" />
            </form> 

      </div>
    );
  }
}

export default App;
