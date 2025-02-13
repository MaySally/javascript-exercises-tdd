const sumAll = function(numX, numY) {
    if (numX <= 0 || numY <= 0){
        return 'ERROR';
    }

    if (!Number.isInteger(numX) || !Number.isInteger(numY)){
        return 'ERROR';
    }

    if (numX > numY) {
        // Swap numX and numY if numX is larger
        [numX, numY] = [numY, numX];
    }
    
    let num = 0;
    for (i = numX; i <= numY; i++) {
        num += i
    }
    return num;

};

// Do not edit below this line
module.exports = sumAll;
