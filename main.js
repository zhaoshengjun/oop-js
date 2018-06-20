function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function() {
    // use default location to do calculation
  };
  this.draw = function() {
    this.computeOptimumLocation();
    console.log("draw");
  };
}
const circle = new Circle(10);
circle.defaultLocation = false;
circle.draw(); // this will create error
