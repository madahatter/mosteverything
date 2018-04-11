var fullPage = document.querySelector("body")
var textBox = document.querySelector("h1")
var randNum = Math.floor((Math.random() * 2000) + 1000);
var clicked = setTimeout(()=> {textBox.innerText = "You LOST :("; ended = true}, 1000)
fullPage.addEventListener('click', ()=> {if(!ended){textBox.innerText = "You Won!!!!"; clearTimeout(clicked)}})