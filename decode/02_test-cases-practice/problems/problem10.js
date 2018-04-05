var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  "hEllo world",
  "this is a string",
  "MAKE PROPER CASING",
  "John doe",
  "my name IS"
]

let outputs = [
  "Hello World",
  "This Is A String",
  "Make Proper Casing",
  "John Doe",
  "My Name Is",
]

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

*/
function f(str) {
    var tempStr = str.toLowerCase()
    arr = tempStr.split( ' ' )
    //console.log(arr) 
    //tempStr = tempStr.slice(1,tempStr.length)
    //console.log('a',tempStr)
    for( var i = 0 ; i < arr.length ; i++){
        arr[i] = arr[i][0].toUpperCase()  +arr[i].slice(1,arr[i].length)  
    }
    console.log(arr.join(" "))
return arr.join(" ")




    /*
    for(var i = 0; i < splitStr.length; i++){


        splitStr[i].replace(0,'X') // = 'X' //splitStr[i][0].toUpperCase();
        //console.log(splitStr[i][0].toUpperCase())
    }
    var finalString = splitStr.join(" ")
    console.log(finalString)
    console.log(splitStr)*/
    return 'ok' // finalString
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

