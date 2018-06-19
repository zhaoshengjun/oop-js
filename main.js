function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw ...");
  };
}

let c1 = Circle.call({}, 1);
let c2 = Circle.apply({}, [1]);
