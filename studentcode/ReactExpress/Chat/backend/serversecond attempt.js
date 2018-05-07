// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// app.use(bodyParser.raw({ type: '*/*' }))

// let serverState = {
//     user: {
//         userName: '',
//         messages: [],
//         password: '',
//         uniqueID: ''
//     }
// }

// app.get('/listMessages', (req, res) => {
//     res.send(JSON.stringify({ messages: serverState.user.messages, userName: serverState.user.userName }))
// })
// app.post('/loginSubmit', (req, res) => {
//     let parsedBody = JSON.parse(req.body.toString())
//     if (parsedBody.userName === serverState.user.userName && parsedBody.password == serverState.user.password) {
//         serverState.user.uniqueID = Math.floor(Math.random()*10000000)
//         console.log("here")
//         console.log("LOGIN SUCCESFUL")
//         res.send(JSON.stringify({uniqueID: serverState.user.uniqueID}))
//     }
//     else {
//         console.log('login failed')
//         res.send(JSON.stringify("Fail"))
//     }
// }
// )
// app.post('/createSubmit', (req, res) => {
//     let parsedBody = JSON.parse(req.body.toString())
//      //serverState.user.userName = parsedBody.newUserName
//      serverState.user.userName = parsedBody.newUsername
//      serverState.user.password = parsedBody.newPassword
// }
// )

// app.post('/messageSubmit', (req, res) => {
//     let parsedBody = JSON.parse(req.body.toString())
//     console.log(parsedBody.uniqueID)
//     console.log(serverState.user.uniqueID)
//     if(serverState.user.uniqueID === parsedBody.uniqueID){
//     serverState.user.userName = parsedBody.userName
//     serverState.user.messages = serverState.user.messages.concat([serverState.user.userName + ': ' + parsedBody.inputValue])
//     //console.log(severState.user.userName + ":" + serverState.user.messages)
//     res.send("Success")
// }}
// )

// app.post('/userName', (req, res) => {
//     let parsedBody = JSON.parse(req.body.toString())
//     serverState.user.userName = parsedBody.userName
//     console.log(serverState.user.userName)
//     res.send("Success")
// }
// )



// app.listen(4000)

