let express = require('express')
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.raw({ type: '*/*' }))

app.post('/question5', (req, res) => {
    var a = (JSON.parse(req.body.toString()))
    if(a.name === "foo" && a.password === "bar") {
        res.send("success")
    }
    else {
        res.send("failure")
    }
})
app.listen(3000, () => {
    console.log("connected")
})