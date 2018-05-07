// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super()

//     //let randNum = Math.floor(Math.random() * 100)
//     this.state = {
//       loginChange: '',
//       passwordChange: '',
//       inputValue: "",
//       userName: '',
//       messages: [],
//       loginState: false

//     }
//   }

//   getPersInfo= () => {
//     return (
//       <form onSubmit={this.handleLoginSubmit}>
//       <div className='chat'>
//       <input type='text' value={this.state.loginChange} onChange={this.loginChange}>
//       </input>
//       <input type='password' value={this.state.passwordChange} onChange={this.passwordChange}></input>
//       <input type='submit'></input>
//       </div>
//       </form>
//       )
//   //   if(!this.state.userName) {
//   //     var person = window.prompt("What is your name?")
//   //       fetch('/userName', {
//   //         method: "POST",
//   //         body: JSON.stringify({userName : person})
//   //       })
//   //         .then(console.log('Sent'))

//   // }
//   }

//   // handleLogin = () => {
//   //   event.preventDefault()
//   // }
//   loginChange = (event) => {
//     event.preventDefault()
//     this.setState({ loginChange: event.target.value })
//   }
//   passwordChange = (event) => {
//     event.preventDefault()
//     this.setState({ passwordChange: event.target.value })
//   }
//   componentDidMount() {
//     this.getPersInfo()
//     setInterval(this.listMessages, 500)
//   }
//   listMessages = () => {
//     fetch('/listMessages')
//       .then(response => response.text())
//       .then(response => {
//         let parsified = JSON.parse(response)
//         //console.log(parsified)
//         this.setState({userName: parsified.userName, messages: parsified.messages})
//         //this.state.userName = parsified.userName
//       })
//       ///console.log(response)
//       .then(response => { 
//       // console.log(response)
//         //this.setState({ messages: JSON.parse(response) })
//       })
//   }

//   handleLoginSubmit = (event) => {
//     event.preventDefault()
//     // let message = JSON.stringify(this.state.inputValue)
//     // let uName = JSON.stringify(this.state.user.userName)
//     fetch('/login', {
//       method: "POST",
//       body: JSON.stringify({loginChange : this.state.loginChange, passwordChange: this.state.passwordChange})
//     })
//     .then(response => response.text())
//     .then(response => JSON.parse(response))
//     .then(response)
//       .then(console.log("login sent"))
//     this.setState({ userName: })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault()
//     fetch('/submit', {
//       method: "POST",
//       body: JSON.stringify({inputValue : this.state.inputValue, userName: this.state.userName})
//     })
//       .then(console.log("Msg sent"))
//     this.setState({ inputValue: '' })
//   }


//   handleChange = (event) => {
//     event.preventDefault()
//     this.setState({ inputValue: event.target.value })
//   }

//   render() {
//     if(!this.state.userName) {
//       return this.getPersInfo()}
//       else {
//       return (
//       <div>
//         <div className="topcontainer">
//           {this.state.messages.map((x) => (<div> {this.state.userName + ' ' + x} </div>))} 
//         </div>
//         <div className="botcontainer">
//           <form onSubmit={this.handleSubmit}>
//             <div className="chat">
//               <input
//                 type="text"
//                 value={this.state.inputValue}
//                 onChange={this.handleChange}>
//               </input>
//               <input type="submit"></input>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
// }
// export default App;
