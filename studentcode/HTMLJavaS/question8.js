var startGame = document.querySelector("#startgame")
var thunder = new Audio('thunder.mp3'); 
var randStart = genRandNum() 
var textBox = document.querySelector("h1")
var fullPage = document.querySelector("body")
var ended = false
var canWin = false
function genRandNum() {
    return Math.floor((Math.random() * (6000)) + 2000)
}

function giveInstructions() {
    var label = document.createElement("Label") 
    label.innerHTML = "READY?  When lightning strikes: player 1 press 'Q' and player 2 press 'P'" 
    textBox.appendChild(label)
}

function thunderPlay() { 
    thunder.play();
    canWin = true
} 
function lightningImage() {
    fullPage.style.backgroundImage = "url('cartoon rain.gif')"
}

startGame.addEventListener('click',()=>{
    startGame.remove()
    giveInstructions()
    fullPage.addEventListener("keydown", (e)=> {
        if(canWin) {
            if(!ended && e.keyCode == 81) {
                textBox.innerHTML = "Player 1 has Won!";
                ended = true;
            }
            if(!ended && e.keyCode == 80) {
                textBox.innerHTML = "Player 2 has Won!";
                ended = true;
            }
        }
        else {
            if(!ended && e.keyCode == 81) {
                textBox.innerHTML = "Player 1 has Lost!";
                ended = true;
            }
            if(!ended && e.keyCode == 80) {
                textBox.innerHTML = "Player 2 has Lost!";
                ended = true;
            }
        }
    })
    
{
        setTimeout(()=> {
            thunderPlay()

        lightningImage()

    }
        , randStart)}})
