const fs = require('fs')
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

var firstTimer = 
`
<form action="/" method="POST">
    <div>What is your fave pet</div>
    <input placeholder="Your favourite pet" type="text" name="favepet"/>
    <input type="submit"/>
    </form>
`


app.get('/', (req, res)=>{
    var isPet = fs.readFileSync('./thepet.json')
    console.log(isPet)
    var isPet = isPet.toString()
    console.log(isPet)
    var isPet = JSON.parse(isPet)
    if(!isPet.favepet) {
        res.send(firstTimer)
    }
    else {
        res.send("Fave Pet: " + isPet.favepet)
    }




})

thePet = {}
try {
    thePet = JSON.parse(fs.readFileSync('./thepet.json').toString())
} catch (err){

}

app.post('/', (req, res) => {
    thePet = req.body
    fs.writeFileSync('./thepet.json', JSON.stringify(thePet))
    if(req.body.favepet) {
        res.send("form submitted")
    }
    else {
        res.send("failure")
    }
})

app.listen(3000, () => {
    console.log("connected")
})