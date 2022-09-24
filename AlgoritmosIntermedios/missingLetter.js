/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;

    str
        .split("")
        .forEach(letter => {
            if (letter.charCodeAt(0) === currCharCode) {
                currCharCode++;
            } else {
                missing = String.fromCharCode(currCharCode);
            }
        });

    return missing;
}

fearNotLetter("abce");

function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
        // Check if the difference in char codes between adjacent characters in the string is more than 1 (check ASCII table)
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            // Return the missing character ( +1 from where the gap was detected)
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}

function fearNotLetter(str) {
    var allChars = "";
    var notChars = new RegExp("[^" + str + "]", "g"); // selects everything except str

    for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
        allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

    return allChars.match(notChars)
        ? allChars.match(notChars).join("")
        : undefined;
}

// test here
fearNotLetter("abce");