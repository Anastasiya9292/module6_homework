function sumNum(x) {
    return function(y) {
        return x + y;
    };
}

let f = sumNum();

console.log(sumNum(1)(2));
