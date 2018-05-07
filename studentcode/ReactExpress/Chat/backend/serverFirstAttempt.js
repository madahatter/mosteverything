// const express = require('express')
// const app =express()
// const bodyParser = require('body-parser')
// app.use(bodyParser.raw({type:'*/*'}))

// let serverState = { 
//     user: {
//     userName: '',
//     messages: [],
//     password: ''
//     }
// }

// app.get('/listMessages', (req,res) => {
//     //console.log(serverState.messages);
//     res.send(JSON.stringify({messages: serverState.user.messages, userName: serverState.user.userName}))
// })
// app.post('/login', (req,res) => {
//     let parsedBody = JSON.parse(req.body.toString())
//     console.log(parsedBody)
//     serverState.user = parsedBody.loginChange
//     serverState[parsedBody.loginChange].password = parsedBody.password 
//     res.send("Success")
//     }
//     )

// app.post('/submit', (req,res) => {
// let parsedBody = JSON.parse(req.body.toString())
// console.log(parsedBody)
// serverState.user.userName = parsedBody.userName
// serverState.user.messages = serverState.user.messages.concat([parsedBody.inputValue])
// console.log(serverState.user.messages)
// res.send("Success")
// }
// )

// app.post('/userName', (req,res) => {
//     let parsedBody = JSON.parse(req.body.toString())
//     console.log(parsedBody)
//     serverState.user.userName = parsedBody.userName
//     console.log(serverState.user.userName)
//     res.send("Success")
//     }
//     )



// app.listen(4000)

