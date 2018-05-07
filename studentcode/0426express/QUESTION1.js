const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.raw({ type: '*/*' }))

app.get('/hello', (req, res) => {
   res.send('<html><body><h1>Hello World</h1></body></html>')
})
app.listen(3000)