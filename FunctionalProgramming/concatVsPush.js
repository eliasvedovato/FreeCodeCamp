/* Functional programming is all about creating and using non-mutating functions.
Compare concat to the push method. push adds an item to the end of the same 
array it is called on, which mutates that array.concat offers a way to add 
new items to the end of an array without any mutating side effects. */

function nonMutatingPush(original, newItem) {
	return original.concat(newItem)
}

const first = [1, 2, 3]
const second = [4, 5]
nonMutatingPush(first, second)