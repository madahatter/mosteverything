let express = require('express')
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.raw({ type: '*/*' }))

app.get('/home', (req, res) => {
   res.send(req.query.foo)
})
app.listen(3000)