var fullPage = document.querySelector("body")
var textBox = document.querySelector("h1")
var app = document.querySelector("#app")
var randNum = Math.floor((Math.random() * 2000) + 1000);
var ended = false
var startButton = document.querySelector("#startgame")
var startGame = false


startButton.addEventListener("click", ()=> {
        setTimeout(()=> {
    var btn = document.createElement("button");
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
                    startButton.remove()
        if(!ended){
            textBox.innerText = "You Won!!!!"; 
            clearTimeout(clicked)
            ended = true
            btn.remove()
            restartFunc()

                    }
        })
        fullPage.addEventListener('click', ()=> {
            if(!ended)
                {textBox.innerText = "YOU LOST!!!!";
                ended = true 
                clearTimeout(clicked)}
                startButton.remove()
                btn.remove()
                restartFunc()
            })
            var clicked = setTimeout(()=> {
                textBox.innerText = "You LOST :("; 
                ended = true
                startButton.remove()
                btn.remove()
                restartFunc()
    }, 2000 + randNum)
}, randNum)

function restartFunc() {
    var restartBtn = document.createElement("button")
    restartBtn.innerText = "Restart Game"
    restartBtn.className = "restartBtn"
    app.appendChild(restartBtn)
    restartBtn.addEventListener('click', ()=> window.location.reload())}
})
