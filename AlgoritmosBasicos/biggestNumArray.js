/* Devuelve un arreglo que consista en el mayor número de cada sub-arreglo 
proporcionado. Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos. */

// (Procedural approach)

function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      /* Create a second variable to hold the largest number and initialise it with the first number. 
      This must be outside an inner loop so it won’t be reassigned until we find a larger number. */
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
          /* Check if the element of the sub array is larger than the 
          currently stored largest number. If so, then update the number in the variable. */
        }
      }
      results[i] = largestNumber;
      // After the inner loop, save the largest number in the corresponding position inside of the results array.
    }
  
    return results;
}

// (Declarative approach)

function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
        // within each inner array, we reduce its contents down to a single value using Array.prototype.reduce() 
      return current > prev ? current : prev;
      /* if the current value is higher than the previous value we set it as the new previous value 
      for comparison with the next item within the array or returns it to the map method 
      callback if it’s the last item */
    });
  });
}

function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

/* To do the work of accepting arguments in the shape of an array, there is this Function.prototype.apply method, 
    but it complicates things a bit by invoking the context function.

    i.e. Math.max.apply(null, [9, 43, 20, 6]); would invoke something like a Max.max method. What we’re looking for… almost.

    Here we’re passing null as the context of the Function.prototype.apply method as Math.max doesn’t need any context.

    Since arr.map expects a callback function, not just an expression, we create a function out of the previous 
    expression by using the Function.bind method.
    Since, Function.prototype.apply is a static method of the same Function object, we can call Function.prototype.bind 
    on Function.prototype.apply i.e. Function.prototype.apply.bind.
    Now we pass the context for the Function.prototype.apply.bind call (in this case we want Math.maxso we can gain 
    its functionality).
    Since the embedded Function.prototype.apply method will also require a context as it’s 1st argument, we need to 
    pass it a bogus context. 

    So, we pass null as the 2nd param to Function.prototype.apply.bind which gives a context to the Math.max method.

    Since, Math.max is independent of any context, hence, it ignores the bogus context given by Function.prototype.apply 
    method call.

    Thus, our Function.prototype.apply.bind(Math.max, null) makes a new function accepting the arr.map values i.e. 
    the inner arrays. */

// (Recursive approach)

function largestOfFour(arr, finalArr = []) {
    return !arr.length
      ? finalArr
      : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}
