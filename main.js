// Factory vs. Constructor

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("Draw ...");
    }
  };
}
const circleCreatedByFactory = createCircle(4);
circleCreatedByFactory.draw();

// Constructor
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw ...");
  };
}
const circleCreatedByConstructor = new Circle(2);
circleCreatedByConstructor.draw();
