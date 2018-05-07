import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      chatBoxInput: '',
      messages: []
    }
  }
  chatBoxTyping = (event) => {
    event.preventDefault()
    this.setState({ chatBoxInput: event.target.value })
  }
  submitChat = (event) => {
    event.preventDefault()
    let body = JSON.stringify(
      {
        contents: this.state.chatBoxInput,
        sessionID: this.state.sessionID
      })
    fetch('/sendMsgs', { method: "POST", body: body })
  }
  getMessages = () => {
    let bod = JSON.stringify({sessionID: this.state.sessionID})
    fetch('/messages', {method: 'POST', body: bod})
      .then(response => response.text())
      .then(msgs => {
        this.setState({ messages: JSON.parse(msgs) })
      })
  }


  handleUsernameChange = (event) => {
    event.preventDefault()
    this.setState({ usernameInput: event.target.value })
  }
  handlePasswordChange = (event) => {
    event.preventDefault()
    this.setState({ passwordInput: event.target.value })
  }
  handleLoginSubmit = (event) => {
    event.preventDefault()
    let body = JSON.stringify(
      {
        userName: this.state.usernameInput,
        password: this.state.passwordInput
      })
    fetch('/login', { method: 'POST', body: body })
      .then(response => response.text())
      .then(responseBody => {
        let parsed = JSON.parse(responseBody)
        let sessionID = parsed.sessionID
        if(sessionID){
            setInterval(this.getMessages, 100)
        this.setState({ sessionID: sessionID })
        } else {
          this.setState({loginFailed: true})
        }
      })

  }

  renderLoginForm = () => {
    return (<form onSubmit={this.handleLoginSubmit}>
      Username
        <input
        type='text'
        onChange={this.handleUsernameChange}
        value={this.usernameInput}
      />
      Password
        <input
        type='text'
        onChange={this.handlePasswordChange}
        value={this.passwordInput}
      />
      <input type='submit' />
    </form>)
  }
  renderMessages = () => {
    return this.state.messages.map(msg => {
      return (<li> {msg.userName}: {msg.contents}</li>)
    })
  }
  render() {
    if (!this.state.sessionID) {
      return this.renderLoginForm()
    }
    if (this.state.loginFailed) {
      return <h1>Login Failed</h1>
    }
    return (
      <div>
        <div className="topcontainer">
          <ul>
            {this.renderMessages()}
          </ul>
        </div>
        <div className="botcontainer">
          <form onSubmit={this.submitChat}>
            <div className="chat">
              <input
                type="text"
                value={this.state.chatBoxInput} onChange={this.chatBoxTyping}>
              </input>
              <input type="submit"></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
