let person = { name: "John" };

let personBase = Object.getPrototypeOf(person);

let des = Object.getOwnPropertyDescriptor(personBase, "toString");
console.log(des);
// configuration: true; enumerable: false, writable: true
