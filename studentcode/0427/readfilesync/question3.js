const fs = require('fs')

var x = fs.readFileSync("question2.txt").toString()
var newArr = x.split("\n")
var sum = 0
for(var i = 0; i < newArr.length; i++){
        sum += Number(newArr[i])
}

console.log(sum)