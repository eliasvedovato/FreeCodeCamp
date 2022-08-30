/* Recursive Solution

This one starts easily since 0! = 1, so you can go ahead and simply return 1 there.

We can use that as an if in order to break the loop we’re going to create using a recursive function. It will check 
if the number you gave the function is 0 (which would be the end of your factorial chain). Functions “end” when 
they return anything. In fact, all functions without an explicit return statement will return undefined.

This is also why instead of having “finished”, a function is always said to “have returned”. And now this…

Understanding recursion

Recursion refers to a function repeating (calling) itself. In this case we are basically returning the given
 number (i.e. 5), multiplied by the function itself but this time the value passed to the num parameter is 
 num-1 (which initially translates to 4). The very function is going to run inside itself interesting, eh? */

 function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

factorialize(5);

function factorialize(num, factorial = 1) {
    if (num === 0) {
        return factorial;
    } else {
        return factorialize(num - 1, factorial * num);
    }
}

factorialize(5);

// https://www.programmerinterview.com/recursion/tail-recursion/