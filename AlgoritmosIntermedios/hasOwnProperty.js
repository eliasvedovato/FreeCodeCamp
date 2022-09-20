/* Make a function that looks through an array of objects 
(first argument) and returns an array of all objects that 
have matching name and value pairs (second argument). Each 
name and value pair of the source object has to be present 
in the object from the collection if it is to be included in 
the returned array. */

function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);

    return collection
        .filter(obj => sourceKeys
            .every(key => obj.hasOwnProperty(key) &&
                obj[key] === source[key]));
}

function whatIsInAName(collection, source) {
    const souceKeys = Object.keys(source);

    return collection.filter(obj => {
        for (let i = 0; i < souceKeys.length; i++) {
            if (!obj.hasOwnProperty(souceKeys[i]) ||
                obj[souceKeys[i]] !== source[souceKeys[i]]) {
                    /* check if the object in the collection 
                    doesn’t have the key and the property value 
                    doesn’t match the value in source. */
                return false;
            }
        }
        return true;
    });
}

// test here
whatIsInAName(
    [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
)

