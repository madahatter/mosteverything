var fullPage = document.querySelector("body")
var textBox = document.querySelector("h1")
var app = document.querySelector("#app")
var randNum = Math.floor((Math.random() * 2000) + 1000);
var ended = false


setTimeout(()=> {
    var btn = document.createElement("BUTTON");
    btn.innerText = "Click Me"
    var height = app.offsetHeight
    var width = app.offsetWidth
    var randHeight = Math.random() * (height)
    var randWidth = Math.random() * (width)
    btn.style.position = "absolute"
    btn.style.top = randHeight
    btn.style.left = randWidth
    document.body.appendChild(btn)
    btn.addEventListener("click", (e)=> {
        e.stopPropagation()
        if(!ended){
            textBox.innerText = "You Won!!!!"; 
            clearTimeout(clicked)
            ended = true
        }
        })
        fullPage.addEventListener('click', ()=> {
            if(!ended)
                {textBox.innerText = "YOU LOST!!!!";
                ended = true 
                clearTimeout(clicked)}
            })
}, randNum)

var clicked = setTimeout(()=> {
            textBox.innerText = "You LOST :("; 
            ended = true
}, 5000 + randNum)

