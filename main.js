function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    }
  });
}
const circle = new Circle(10);
circle.draw();
