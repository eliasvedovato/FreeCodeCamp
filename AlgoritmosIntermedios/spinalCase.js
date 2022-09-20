/* Convert a string to spinal case. Spinal case is 
all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/)
        .join('-')
        .replace(/--/g, '-')
        .toLowerCase();
}

spinalCase('This Is Spinal Tap');

function spinalCase(str) {
    var firstLet = (str.split(''))[0];
    str = str.slice(1, str.length);
    str = str.replace(/\s/g, '-');
    str = str.replace(/([A-Z])/g, '-$1');
    str = str.replace(/_/g, '-');
    str = str.replace(/-+/g, '-');
    return (firstLet + str).toLowerCase();
}

spinalCase('thisIsSpinalTap');

function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/[\s_-]/g, "-")
        .toLowerCase();
}
spinalCase('This Is Spinal Tap');