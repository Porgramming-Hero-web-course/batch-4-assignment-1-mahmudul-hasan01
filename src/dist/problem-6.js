"use strict";
// problem-6
// Define the updateProfile function
function updateProfile(profile, updates) {
    return Object.assign(Object.assign({}, profile), updates);
}
// Sample Input
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// Sample Output
console.log(updateProfile(myProfile, { age: 26 }));
// Output: { name: "Alice", age: 26, email: "alice@example.com" }
