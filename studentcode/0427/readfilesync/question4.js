const fs = require('fs')

var x = fs.readFileSync("question2.txt").toString()
var newArr = x.split("\n")
var modifiedArr = []
for(let i = newArr.length - 2; i >= 0; i--){
    modifiedArr.push(newArr[i])
}
console.log(modifiedArr)

var y = ''
for(let i = 0; i < modifiedArr.length; i++){
    y = y + modifiedArr[i] + "\n"
}
console.log(y)
fs.writeFileSync('./question4.txt', y)