var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [[0,1,2,3], [3,4,5]],

]

let outputs = [
  [0,1,2,4,5]
]

/*
Make this function return the elements that are unique to array1 and array2.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([0,1,2,3], [1,3,4,5]); // [0,4,5]
uniqueElements([1,2,3], [1,2,3]); // []
uniqueElements(2,3); // undefined, not arrays
*/
function f(arr1, arr2) {
  var array3 = arr1.filter(function(obj) { return arr2.indexOf(obj) == -1; })
}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = ouputs[i]
    var input = inputs[i];
    var actual = f(input[0], input[1]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

