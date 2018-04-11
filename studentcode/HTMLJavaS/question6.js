var fullPage = document.querySelector("body")
var textBox = document.querySelector("h1")
var app = document.querySelector("#app")
var randNum = Math.floor((Math.random() * 2000) + 1000);
var ended = false
var startButton = document.querySelector("#startgame")
var startGame = false
var ctr = 0;
var buttons = [];

function generateButtons(count, clicked) {
    for(var i = 0; i < count; i++){
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
        buttons.push(btn);
        btn.addEventListener("click", (e)=> {
            e.stopPropagation()
            ctr++;
            e.target.remove();
            if(ctr >= count && !ended) {
                textBox.innerText = "You Won!!!!"; 
                clearTimeout(clicked)
                ended = true
                restartFunc()
            }
            
            // if(!ended){
            //     textBox.innerText = "You Won!!!!"; 
            //     clearTimeout(clicked)
            //     ended = true
            //     btn.remove()
            //     restartFunc()
            // }
        })
    }
    
}

function deleteButtons() {
    buttons.forEach(btn => btn.remove());
    buttons = [];
}

startButton.addEventListener("click", ()=> {
        startButton.remove()
        setTimeout(()=> {
            generateButtons(10, clicked);
            fullPage.addEventListener('click', ()=> {
            if(!ended)
                {textBox.innerText = "YOU LOST!!!!";
                ended = true 
                deleteButtons()
                clearTimeout(clicked)}
                restartFunc()
            })
            var clicked = setTimeout(()=> {
                textBox.innerText = "You LOST :("; 
                ended = true
                deleteButtons()
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
