function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };
  this.radius = radius;
  let computeOptimumLocation = function() {
    // use default location to do calculation
    defaultLocation.x += 10;
  };
  this.draw = function() {
    computeOptimumLocation();
    console.log("draw");
  };
}
const circle = new Circle(10);
circle.draw();
