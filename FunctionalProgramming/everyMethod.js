/* The every method works with arrays to check if every element passes a particular test. It returns 
a Boolean value - true if all values meet the criteria, false if not. */

const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10; // false
});

/* Use the every method inside the checkPositive function to check if every element in arr 
is positive. The function should return a Boolean value. */

function checkPositive(arr) {
    return arr.every(val => val > 0);
}

checkPositive([1, 2, 3, -4, 5]);