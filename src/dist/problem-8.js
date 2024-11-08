"use strict";
// problem-8
function validateKeys(obj, keys) {
    // Check if every key in the keys array exists in the object
    return keys.every(key => key in obj);
}
// Sample Input
const person1 = { name: "Alice", age: 25, email: "alice@example.com" };
// Sample Output
console.log(validateKeys(person1, ["name", "age"])); // Output: true
//   console.log(validateKeys(person1, ["name", "address"])); // Output: false
