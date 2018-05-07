let express = require('express')
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.raw({ type: '*/*' }))

app.post('/question5', (req, res) => {
    console.log(JSON.parse(req.body.toString()))
    var a = (JSON.parse(req.body.toString()))

    if(a.name.length < 1 || a.password.length < 1){
        res.send('Failure')
    }
    res.send("SUCCESS")
})
app.listen(3000, () => {
    console.log("connected")
})