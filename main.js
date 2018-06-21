function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(val) {
      if (!val.x || !val.y) {
        throw new Error("Invalid location!");
      }
      defaultLocation = val;
    }
  });
}
const circle = new Circle(10);
circle.draw();
circle.defaultLocation = 1;
