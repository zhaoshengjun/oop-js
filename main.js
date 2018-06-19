function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw ...");
  };
}

console.log(Circle.name); // function name
console.log(Circle.length); // function parameters
console.log(Circle.constructor); // function constructor
