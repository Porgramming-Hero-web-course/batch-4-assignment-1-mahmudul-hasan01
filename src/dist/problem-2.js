"use strict";
// problem-2
function removeDuplicates(num) {
    const uniqueNumbers = [];
    const seen = {};
    for (let i = 0; i < num.length; i++) {
        const number = num[i];
        if (!seen[number]) {
            uniqueNumbers.push(number);
            seen[number] = true;
        }
    }
    return uniqueNumbers;
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
