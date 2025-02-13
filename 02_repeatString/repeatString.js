const repeatString = function(string, num) {
    let stringResult = '';

    if (num < 0) {
        return 'ERROR';
    }
           
    for (let i = 0; i < num; i++) {
        stringResult += string;
    }
    return stringResult;    
    
};

// Do not edit below this line
module.exports = repeatString;
