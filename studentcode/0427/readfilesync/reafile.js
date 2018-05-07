const fs = require('fs')

var randomNums = for(var i = 0; i < 100; i++) {
    console.log(i)
}

fs.writeFileSync('./foo.txt', randomNums)