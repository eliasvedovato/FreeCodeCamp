/* A side effect of the sort method is that it changes the 
order of the elements in the original array. In other words, 
it mutates the array in place.  */

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
}

nonMutatingSort(globalArray);