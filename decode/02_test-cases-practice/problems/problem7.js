var assert = require('assert');

// we need 7 test cases. 
let inputs = [
    ["foo", 3],
    ["to", 0],
    ["goo", -1],
    ["adam", 2],
    ["Leslie", 2],
    ["Marley", 3],
    ["lasttest", undefined]
]

let outputs = [
  "foofoofoo",
  "",
  "",
  "adamadam",
  "LeslieLeslie",
  "MarleyMarleyMarley",
  undefined
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/
function f(arr) {
if(typeof arr[0] === "string" && typeof arr[1] === "number"){
    var str = ""
    var newArr = arr[0]
    for(let i = 0; i < arr[1]; i++){
        str += newArr    
    }
    return str
}
else if(arr[1] <= 0){
    return ""
}
else return undefined
}

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
runTest(5);
runTest(6);

