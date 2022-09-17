/* A common pattern while working with arrays is when you want 
to remove items and keep the rest of the array. JavaScript offers 
the splice method for this, which takes arguments for the index 
of where to start removing items, then the number of items to 
remove. If the second argument is not provided, the default is 
to remove items through the end. However, the splice method 
mutates the original array it is called on. As we saw in the last 
challenge, the slice method does not mutate the original array, 
but returns a new one which can be saved into a variable. Recall 
that the slice method takes two arguments for the indices to begin 
and end the slice (the end is non-inclusive), and returns those items 
in a new array. Using the slice method instead of splice helps to 
avoid any array-mutating side effects.*/

function nonMutatingSplice(cities) {
	return cities.slice(0, 3)
}

const inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin']

nonMutatingSplice(inputCities) // ["Chicago", "Delhi", "Islamabad"]