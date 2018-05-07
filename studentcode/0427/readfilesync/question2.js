const fs = require('fs')

var x = 0

for(var i = 0; i < 10; i++)  {
    var randomNumber = Math.floor(Math.random()* 100)
    x = x + (randomNumber) + "\n"
}
fs.writeFileSync('./question2.txt', x)