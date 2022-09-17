/* Concatenation means to join items end to end. JavaScript offers 
the concat method for both strings and arrays that work in the 
same way. For arrays, the method is called on one, then another 
array is provided as the argument to concat, which is added to the 
end of the first array. It returns a new array and does not mutate 
either of the original arrays. */

function nonMutatingConcat(original, attach) {
	return original.concat(attach)
}

const first = [1, 2, 3]
const second = [4, 5]
nonMutatingConcat(first, second) // [1, 2, 3, 4, 5]