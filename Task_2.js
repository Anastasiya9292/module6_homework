function isPrimeNum(num) {
    if((num > 1000) || (num === 1) || (num === 0)) return console.log("Данные неверны");
    for(let i = 2; i < num; i++) {
      if(num % i === 0) return console.log("Число не является простым");
    }
    if(num > 1) return console.log("Число является простым");
  };
  isPrimeNum(53);
