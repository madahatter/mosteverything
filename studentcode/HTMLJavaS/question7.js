var startButton = document.querySelector("#startbutton")
var entirePage = document.querySelector("#entirepage")
var textBox = document.querySelector("h1")
var buttons = []
var ctr = 0
var randTime = genRandNum(1000, 3000)
var randButton = genRandNum(1, 10)
var gameTime = randTime + 1000 + randButton * 400
var ended = false


function genRandNum(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function restartFunc() {
    var restartBtn = document.createElement("button")
    restartBtn.innerText = "Restart Game"
    restartBtn.className = "restartBtn"
    entirePage.appendChild(restartBtn)
    restartBtn.addEventListener('click', ()=> window.location.reload())
    
}
function deleteButtons() {
    buttons.forEach(btn => btn.remove());
    buttons = [];
}
    startButton.addEventListener('click',()=>{
        startButton.remove()
        generateButtons(randButton)
            setTimeout(()=>{
                setTimeout(()=> {
                    if(!ended) {
                        var label = document.createElement("Label") 
                        label.innerHTML = "You've Lost, Try Again?" 
                        textBox.appendChild(label)
                        ended = true
                        entirePage.removeEventListener('click', clickHandler)
                        deleteButtons()
                        restartFunc()
                    }
                }
            
            , gameTime)
            
            entirepage.addEventListener('click', clickHandler)
            
            function clickHandler(){ 
                if(ended == false) {     
                var label = document.createElement("Label") 
                label.innerHTML = "You've Lost, Try Again?" 
                textBox.appendChild(label)
                ended = true
                entirePage.removeEventListener('click', clickHandler)
                deleteButtons()  
            
                restartFunc()}
            }}
        ,randTime)})


 function generateButtons(count) {
    for(var i = 0; i < count; i++){
         var btn = document.createElement("button");
         btn.className = "duck"
         var height = entirePage.offsetHeight
         var width = entirePage.offsetWidth
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
             var count = randButton
             if(ctr >= count && !ended) {
                 var label = document.createElement("Label") 
                 label.innerHTML = "You're a winner!!!" 
                 textBox.appendChild(label)
                 ended = true
                 restartFunc()
                }})
             }}

    



