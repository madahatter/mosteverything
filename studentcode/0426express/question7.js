let express = require('express')
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

var website = 
`
<form action="/postendpoint" method="POST">
    <input placeholder="username" type="text" name="username"/>
    <input placeholder="password" type="password" name="password"/>
    <input type="submit"/>
    </form>
`
app.get('/', (req, res)=> res.send(website))
app.post('/postendpoint', (req, res) => {
    console.log(req.body.username + "and" + req.body.password)
    if(req.body.username.length > 10 && req.body.password.length > 10) {
        res.send("success")
    }
    else {
        res.send("failure")
    }
})
app.listen(3000, () => {
    console.log("connected")
})