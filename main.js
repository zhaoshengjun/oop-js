function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function() {
  console.log("draw");
};

let c1 = new Circle(1);
let c2 = new Circle(2);
// c1 and c2 has only radius property, but you can call draw method because it's defined in the super class.
