let express = require('express')
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.raw({ type: '*/*' }))

app.get('/random', (req, res) =>{
    res.send('<html><body>'+(Math.random())+'</body></html>')
})

app.listen(3000)