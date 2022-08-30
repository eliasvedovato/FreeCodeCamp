/* Encuentra la palabra más larga en una cadena

Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número.*/

function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        console.log(maxLength = words[i].length) // 356
      }
    }
  
    console.log(maxLength) // 6
    return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/* Take the string and convert it into an array of words. Declare a variable to keep 
track of the maximum length and loop from 0 to the length of the array of words.

Then check for the longest word by comparing the current word to the previous one 
and storing the new longest word. At the end of the loop just return the number 
value of the variable maxLength. */

// Using .reduce()

function findLongestWordLength(s) {
  return s.split(' ')
    .reduce(function(longest, word) {
      return Math.max(longest, word.length)
    }, 0);
}

/* In case you’re wondering about that 0 after the callback function, it is used
 to give an initial value to the longest, so that Math.max will know where to start. */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// Using .map()

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

/* We provide Math.max with the length of each word as argument, and it will simply return the highest of all.

Let’s analyze everything inside the Math.max parenthesees to understand how we do that.

str.split(" ") splits the string into an array, taking spaces as separators. It returns this array: 
[“The”,"quick,“brown”,“fox”,“jumped”,“over”,“the”,“lazy”,“dog”].

Then, we will make another array, made from the lengths of each element of the str.split(" ") array with map().

str.split(" ").map(word => word.length) returns [3, 5, 5, 3, 6, 4, 3, 4, 3]

Finally, we pass the array as argument for the Math.max function with the spread operator ... */

function findLongestWordLength(str) {
    // split the string into individual words
    const words = str.split(" ");
  
    // words only has 1 element left that is the longest element
    if (words.length == 1) {
      return words[0].length;
    }
  
    // if words has multiple elements, remove the first element
    // and recursively call the function
    console.log(words)

        /* [ 'The',
            'quick',
            'brown',
            'fox',
            'jumped',
            'over',
            'the',
            'lazy',
            'dog' ] */

    return Math.max(
      words[0].length,
      findLongestWordLength(words.slice(1).join(" "))
    );
        /* [ 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog' ]
        [ 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog' ]
        [ 'fox', 'jumped', 'over', 'the', 'lazy', 'dog' ]
        [ 'jumped', 'over', 'the', 'lazy', 'dog' ]
        [ 'over', 'the', 'lazy', 'dog' ]
        [ 'the', 'lazy', 'dog' ]
        [ 'lazy', 'dog' ] */
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");

/* The first line splits the string into individual words. Then we check if words only has 1 element left. 
If so, then that is the longest element and we return it. Otherwise, we remove the first element and 
recursively call the function findLongestWord, returning the maximum between the length of the first 
result and the recursive call . */