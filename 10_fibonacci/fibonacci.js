const fibonacci = function(m) {
    
    let n = parseInt(m)
    if (n < 0) return 'OOPS';
    if (n == 0) return 0;


    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let x = a + b;
        a = b;
        b = x;
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;
