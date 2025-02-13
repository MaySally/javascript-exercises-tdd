const palindromes = function (str) {
 let x = str
    .replace(/\s+/g, '')               // Remove spaces
    .replace(/[^\w\s]|_/g, '')          // Remove punctuation
    .toLowerCase()                     // Convert to lowercase
    .split('')                          // Split into an array of characters
    .reverse()                          // Reverse the array
    .join('');                          // Join back into a string
 let y = str
    .replace(/\s+/g, '')               // Remove spaces
    .replace(/[^\w\s]|_/g, '')          // Remove punctuation
    .toLowerCase();                    // Convert to lowercase (no reverse)
 if (x === y) {
    return true;
} else {
    return false;
}
};

// Do not edit below this line
module.exports = palindromes;
