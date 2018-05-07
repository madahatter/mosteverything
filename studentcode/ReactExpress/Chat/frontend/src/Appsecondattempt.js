// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       userNameChange: '',
//       passwordChange: '',
//       inputValue: "",
//       userName: '',
//       messages: [],
//       loginState: false,
//       createPass: '',
//       createUser: '',
//       uniqueID: ''


//     }
//   }
//   userNameInput = (event) => {
//     event.preventDefault()
//     this.setState({ userNameChange: event.target.value })
//   }
//   passwordInput = (event) => {
//     event.preventDefault()
//     this.setState({ passwordChange: event.target.value })
//   }
//   createSubmit = (event) => {
//     event.preventDefault()
//     fetch('/createSubmit', {
//       method: 'POST',
//       body: JSON.stringify({newUsername: this.state.createUser, newPassword: this.state.createPass})
//     })
//   }
//   makePassword = (event) => {
//     event.preventDefault()
//     this.setState({ createPass: event.target.value })
//   }
//   makeUsername = (event) => {
//     event.preventDefault()
//     this.setState({ createUser: event.target.value })
//   }

//   loginSubmit = (event) => {
//     event.preventDefault()
//     fetch('/loginSubmit', {
//       method: 'POST',
//       body: JSON.stringify({ userName: this.state.userNameChange, password: this.state.passwordChange })
//     })
//       .then(response => response.text())
//       .then(response => {
//         let parsified = JSON.parse(response)
//         console.log(parsified)
//         if (parsified === "Fail") {
//           this.setState({ loginState: false })

//         }
//         else {
//           console.log("Reached")
//           this.setState({ userName: this.state.userNameChange, loginState: true, uniqueID: parsified.uniqueID})
//         }
//       }
//       )

//   }
//   componentDidMount() {
//     setInterval(this.listMessages, 500)
//   }
//   listMessages = () => {
//     fetch('/listMessages')
//       .then(response => response.text())
//       .then(response => {
//         let parsified = JSON.parse(response)
//         this.setState({ messages: parsified.messages })
//       })
//   }
//   handleSubmit = (event) => {
//     event.preventDefault()
//     fetch('/messageSubmit', {
//       method: "POST",
//       body: JSON.stringify({ inputValue: this.state.inputValue, userName: this.state.userName, uniqueID: this.state.uniqueID})
//     })
//       .then(console.log("Msg sent"))
//     this.setState({ inputValue: '' })
//   }
//   handleChange = (event) => {
//     event.preventDefault()
//     this.setState({ inputValue: event.target.value })
//   }

//   loginScreen = () => {
//     return (
//       <div>
//         <div>Returning Users:</div>
//         <div>
//           <form onSubmit={this.loginSubmit}>
//             Username
//           <input
//               type="text"
//               value={this.state.userNameChange}
//               onChange={this.userNameInput}>
//             </input>
//             Password
//           <input
//               type="text"
//               value={this.state.passwordChange}
//               onChange={this.passwordInput}>
//             </input>
//             <input type="submit"></input>
//           </form>
//         </div>

//         <div>Create Account:</div>
//         <div>
//           <form onSubmit={this.createSubmit}>
//             Username
//         <input
//               type="text"
//               value={this.state.createUser}
//               onChange={this.makeUsername}>
//             </input>
//             Password
//         <input
//               type="text"
//               value={this.state.createPass}
//               onChange={this.makePassword}>
//             </input>
//             <input type="submit"></input>
//           </form>
//         </div>
//       </div>)
//   }
//   render() {
//     if (this.state.loginState === false) {
//       return <div>{this.loginScreen()}</div>
//     }
//     else {
//       return (
//         <div>
//           <div className="topcontainer">
//             {this.state.messages.map((x) => (<div> {x} </div>))}
//           </div>
//           <div className="botcontainer">
//             <form onSubmit={this.handleSubmit}>
//               <div className="chat">
//                 <input
//                   type="text"
//                   value={this.state.inputValue}
//                   onChange={this.handleChange}>
//                 </input>
//                 <input type="submit"></input>
//               </div>
//             </form>
//           </div>
//         </div>
//       );
//     }
//   }
// }
// export default App;
