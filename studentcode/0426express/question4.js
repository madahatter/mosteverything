let express = require('express')
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.raw({ type: '*/*' }))

app.get('/highorlow', (req, res) => {
    let hightorlow = () => {
        if (req.query.foo > req.query.bar) {
            return res.send('<html>' + req.query.foo + '</html>')
        }
        else { res.send('<html>' + req.query.bar + '</html>') 
        }
    }
    hightorlow()
})
app.listen(3000)