var fullPage = document.querySelector("body")
var textBox = document.querySelector("h1")
var randNum = Math.floor((Math.random() * 2000) + 1000);
var ended = false
setTimeout(()=> {textBox.innerText = "THE GAME HAS BEGUN!!! GO GO GO";}, randNum)
var clicked = setTimeout(()=> {textBox.innerText = "You LOST :("; ended = true}, 5000 + randNum)
fullPage.addEventListener('click', ()=> {if(!ended){textBox.innerText = "You Won!!!!"; clearTimeout(clicked)}})
fullPage.addEventListener("keypress", (e)=> {if(!ended && e.keyCode == 32){textBox.innerText = "You Won!!!!"; clearTimeout(clicked)}console.log(x)})
