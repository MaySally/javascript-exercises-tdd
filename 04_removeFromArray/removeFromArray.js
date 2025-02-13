const removeFromArray = function(array, ...args) {
    for (let arg of args) {
        let index;
        while ((index = array.indexOf(arg)) !== -1) {
            array.splice(index, 1);
        }           
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
