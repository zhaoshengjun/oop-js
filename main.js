let person = { name: "John" };

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: true,
  configurable: false
});

delete person.name;
console.log(person);
