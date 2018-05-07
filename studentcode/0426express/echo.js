const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.raw({ type: '*/*' }))

app.post('/echo', (req, res) => {
   res.send(req.body.toString())
})
app.listen(3000)