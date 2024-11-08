"use strict";
// problem-5
function getProperty(obj, key) {
    return obj[key];
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));
