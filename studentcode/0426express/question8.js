let express = require('express')
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

var website = 
`
<form action="/submitform" method="POST">
    <input type="text" name="username"/>
    <input type="text" name="password"/>
    <input type="text" name="repeatpassword"/>
    <input type="submit"/>
    </form>
`
app.get('/', (req, res)=> res.send(website))
app.post('/submitform', (req, res) => {
    if(req.body.username.length > 1 && req.body.password.length > 1 && req.body.password === req.body.repeatpassword) {
        res.send("success")
    }
    else {
        res.send("failure")
    }
})
app.listen(3000, () => {
    console.log("connected")
})