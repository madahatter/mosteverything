class Shape {
    toString() {
        return "This shape has an area of " + this.area() + " and perimeter " + this.perimeter();
    }
}

class Rectangle extends Shape{
    constructor(width,height){
        super()
        this.height = height;
        this.width = width;
    }
    area() {return this.width * this.height};
    perimeter() {return (this.width * 2) + (this.height * 2)}

    // A rectangle is a shape
    // Every rectangle has a width and a height
    // Implement the constructor
    // Implement the area and perimeter methods
    // The constructor has two arguments: width and height
}

class Square extends Rectangle{
    constructor(side){
        super()
        this.height = side
        this.width = side
    }
}


module.exports = {Shape, Rectangle, Square};