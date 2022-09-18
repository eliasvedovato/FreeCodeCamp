/* The some method works with arrays to check if any element passes a particular test. 
It returns a Boolean value - true if any of the values meet the criteria, false if not. */

const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function (currentValue) {
    return currentValue < 10;
});

/* Use the some method inside the checkPositive function to check if any element in arr 
is positive. The function should return a Boolean value. */

function checkPositive(arr) {
    return arr.some(pos => pos > 0)
}

checkPositive([1, 2, 3, -4, 5]);