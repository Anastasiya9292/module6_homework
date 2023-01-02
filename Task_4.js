function countInOrderSecond(a, b) {
    let one = a;

    let intervalId = setInterval(function () {
        if (one <= b) {
            console.log(one);
            one++;
        }
        else clearInterval(intervalId);
    }, 1000);
}

countInOrderSecond(1, 10);



