/* Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */

function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]);
        /* We use the if statement to check if the current element is truthy or falsy
        If the element is truthy, we push it to the new array (newArray). This result in the new 
        array containing only truthy elements. */
    }
    return newArray;
}

function bouncer(arr) {
	return arr.filter(Boolean)
}

/* Array.prototype.filter method expects a function that returns a Boolean value which 
takes a single argument and returns true for truthy value or false for falsy value */