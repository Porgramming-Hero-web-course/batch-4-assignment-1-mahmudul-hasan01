"use strict";
// problem-1
function sumArray(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}
sumArray([1, 2, 3, 4, 5]);
