let person = { name: "John" };

Object.defineProperty(person, "name", {
  writable: false
});

person.name = "Josh";
console.log(person.name);
