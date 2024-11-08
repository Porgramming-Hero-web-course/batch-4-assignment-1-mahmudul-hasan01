"use strict";
// problem-7
class Car {
    // Constructor to initialize the car's properties
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to calculate the car's age
    getCarAge() {
        const currentYear = new Date().getFullYear(); // Get the current year
        return currentYear - this.year; // Calculate the age by subtracting the car's year from the current year
    }
}
// Sample Input 1
const car = new Car("Honda", "Civic", 2018);
// Sample Output 1
console.log(car.getCarAge()); // Output: 6 (assuming the current year is 2024)
