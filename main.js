let person = { name: "John" };

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false
});

person.name = "Josh";
console.log(person.name);
console.log(Object.keys(person));
