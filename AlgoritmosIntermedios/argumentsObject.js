/* You will be provided with an initial array (the first argument in the destroyer 
function), followed by one or more arguments. Remove all elements from the 
initial array that are of the same value as these arguments. */

function destroyer(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function (val) {
        return !valsToRemove.includes(val);
        /* Return the filtered array, using includes() in the callback 
        function to check if val is not in valsToRemove; returning true to 
        keep the value in the original array or false to remove it. */
    });
}

function destroyer(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}

function destroyer(arr) {
    const valsToRemove = Object.values(arguments).slice(1);
    const filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        let removeElement = false;
        for (let j = 0; j < valsToRemove.length; j++) {
            if (arr[i] === valsToRemove[j]) {
                removeElement = true;
            }
        }
        if (!removeElement) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}