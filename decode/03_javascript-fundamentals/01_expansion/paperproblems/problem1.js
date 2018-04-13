function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}
function reverseString(str) {
  var splitString = str.split(""); // var splitString = "hello".split("");
 
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
 
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    
}
// Expand each of the following and get the result of the expression
// #1
square(decrement(square(decrement(3))))
var ans = decrement(3)
var ans1 = square(ans)
var ans2 = decrement(ans1)
var ans3 = square(ans2)
console.log(ans3)
// #2
decrement(decrement(square(square(3))))
var ans4 = square(3)
var ans5 = square(ans4)
var ans6 = decrement(ans5)
var ans7 = decrement(ans6)
console.log(ans7)
// #3
duplicateString(reverseString("hello"))
var ans7 = reverseString("hello")
var ans8 = duplicateString(ans7)
console.log(ans8)
// #4
reverseString(duplicateString(duplicateString("foo")))
var ans9 = duplicateString("foo")
var ans10 = duplicateString(ans9)
var ans11 = reverseString(ans10)
console.log(ans11)