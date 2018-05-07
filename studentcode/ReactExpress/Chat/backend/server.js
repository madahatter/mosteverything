const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))

let serverState = {
    messages: []
}

let sessionInfo = {}

app.post('/login', (req, res) => {
    let parsed = JSON.parse(req.body.toString())
    let userName = parsed.userName
    let password = parsed.password
    let sessionID = '' + Math.floor(Math.random() * 100000000)
    if ((userName === 'bob' && password === 'pwd123') ||
        (userName === 'sue' && password === 'pwd123')) {
        sessionInfo[sessionID] = { userName: userName }
        res.send(JSON.stringify({sessionID: sessionID}))
    } else {
        res.send('failure')
    }
})

app.post('/messages', (req, res) => {
    let parsed = JSON.parse(req.body.toString())
    let sessionID = parsed.sessionID
    if (!sessionInfo[sessionID]) {
        res.send(JSON.stringify('Stop you dirty hacker'))
    } else {
        res.send(JSON.stringify(serverState.messages))
    }
})
app.post('/sendMsgs', (req, res) => {
    let body = JSON.parse(req.body.toString())
    let sessionID = body.sessionID
    let contents = body.contents
    let userName = sessionInfo[sessionID].userName
    if (!userName) {
        res.send("Stop you dirty hacker")
    } else {
        serverState.messages.push({userName, contents})
        res.send("Success")
    }
})

app.listen(4000)