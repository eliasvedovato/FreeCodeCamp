/* We need to take the string and reverse it, so if it originally reads ‘hello’, it will now read ‘olleh’. 
You can solve this challenge by creating a new string (initializing it to a blank string “”) and then 
iterating the string starting from the last character through the first character and the concatenating 
each character to the new string. After iterating through all the characters in the string, you return 
the new string. */

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
}

/*     Our goal is to take the input, str, and return it in reverse. Our first step is to split the string 
    by characters using split(''). Notice that we don’t leave anything in between the single quotes, this 
    tells the function to split the string by each character.

    Using the split() function will turn our string into an array of characters, keep that in mind as we move forward.

    Next we chain the reverse() function, which takes our array of characters and reverses them.

    Finally, we chain join('') to put our characters back together into a string. Notice once again 
    that we left no spaces in the argument for join, this makes sure that the array of characters is 
    joined back together by each character.
    
    You know your solution should return 1 when the number passed to the function is 0 or 1. Also, the final value
     returned will be the product of all the numbers between 1 and the number (inclusive). If you initialize the 
     value for the product to 1, then think how you could start at the given number and continue decrementing this 
     number until a specific value while multiplying the product by the number at each step. 
*/