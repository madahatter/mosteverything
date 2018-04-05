var assert = require('assert');

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["hello", 1],
  ["adam", 1],
  ["john", 2],
  ["mary", 0],
  ["mike", 2],
  ["", 2],
  ["", 5],

]

let outputs = [
  "o",
  "e",
  "d",
  "h",
  "m",
  "k",
  undefined,
  undefined,


]

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(arr) {
  var str = arr[0];
  if(str[arr[1]]) {
    return str.charAt(arr[1])}
  return undefined
  }

function runTest(i) {
    var expected = outputs[i];
    var input = inputs[i];
    var actual = f(input);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
