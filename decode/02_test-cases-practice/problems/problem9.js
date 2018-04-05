var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "this is a test",
    "longest word",
    "this one",
    "",
    "last test"
  
]

let outputs = [
    "test",
    "longest",
    "this",
    "",
    "test",
  
]

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.
*/
function f(str) {
    //console.log(str.split(" "))
    var splitStr = str.split(" ")
    //console.log(splitStr.length)
    var longestWord = 0
    var finalWord = null
    for(var i = 0; i < splitStr.length; i++){
        if(longestWord <= splitStr[i].length){
            longestWord = splitStr[i].length
            finalWord = splitStr[i]

        }
        }
        return finalWord

    }
;

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

