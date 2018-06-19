function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw ...");
  };
}

console.log(Circle.name); // function name
console.log(Circle.length); // function parameters
console.log(Circle.constructor); // function constructor

const CircleFn = new Function(
  "radius", // function parameter
  `
this.radius = radius;
this.draw = function() {
  console.log("draw ...");
};` // function body
);

let circle = new CircleFn(1);
console.log(circle);
