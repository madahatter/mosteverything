const fs = require('fs')
var a = ''
for(var i = 0; i < 100; i++) {
    var randomNums = Math.floor(Math.random() * 10000)
    a = a + randomNums + '\n'
    }

    fs.writeFileSync('./question1.txt', a)