var startButton = document.querySelector("#startbutton")
var fullPage = document.querySelector("body")
var entirePage = document.querySelector("#entirepage")

function generateButtons(count, clicked) {
    for(var i = 0; i < count; i++){
        var btn = document.createElement("button");
        btn.innerText = "Click Me"
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
            if(ctr >= count && !ended) {
                textBox.innerText = "You Won!!!!"; 
                clearTimeout(clicked)
                ended = true
                restartFunc()
            }

    


startButton.addEventListener('click',()=>{
        startButton.remove()
        //setTimeout()
        //generateButtons()}
)
