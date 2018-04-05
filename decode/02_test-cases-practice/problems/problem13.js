var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    "JOHN",
    "ADADA",
    "RADAR",
    "ADAM",
    "TIME"
  
]

let outputs = [
  false,
  true,
  true,
  false,
  false
]

/*
Make this function return true if the input string is a palindrome, and false otherwise. A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {
    var arr1 = str.split("")
    arr1.reverse()
    STR = arr1.join()
    for (i = 0 ; i < arr1.length-1 ; i++ ){
        STR = STR.replace(",", "")
    }
    if (str === STR){
        return true
    }
    return false
}
function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    //assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

