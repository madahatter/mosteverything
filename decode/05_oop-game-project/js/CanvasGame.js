var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var ctx = canvas.getContext("2d")

//ctx.fillRect(100,100,100,100)

function Circle(x,y,dx,dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius

    this.draw = function() {
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2, false)
        ctx.strokeStyle = 'blue'
        ctx.stroke() 
    }
    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
    }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy

        this.draw()
    }
}
var circleArray = []
for (var i = 0; i < 100; i++){
    var x = Math.random() * innerWidth
    var y = Math.random() * innerHeight
    var dx = Math.random() - 0.5 * 4
    var dy = Math.random() - 0.5 * 4
    var radius = 30
    circleArray.push(new Circle(x,y,dx,dy,radius))
}
//var circle = new Circle(200,200,3,3,30)    

console.log(circleArray)


function animate() {
    requestAnimationFrame(animate)
        ctx.clearRect(0,0, innerWidth, innerHeight)
        for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].update()
        }
}

animate()
