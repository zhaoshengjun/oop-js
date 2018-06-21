function StopWatch() {
  let startTime,
    stopTime,
    status,
    duration = 0;
  this.start = function() {
    if (status === "started") {
      throw new Error("Stop watch has already started.");
    }
    status = "started";
    startTime = Date.now();
  };

  this.stop = function() {
    if (status === "stopped") {
      throw new Error("Stop watch has already stopped.");
    } else if (status === "started") {
      status = "stopped";
      stopTime = Date.now();
      duration = duration + (stopTime - startTime) / 1000;
    } else {
      throw new Error("Stop watch has not started yet.");
    }
  };

  this.reset = function() {
    status = null;
    startTime = null;
    stopTime = null;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration + "s";
    }
  });
}
