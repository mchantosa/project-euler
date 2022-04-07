'use strict';

function evenFibsCapped(number) {
  let sum = 2;
  let fib1 = 1;
  let fib2 = 2;

  while (true) {
    const fibNext = fib1 + fib2;
    if (fibNext > number) break;

    fib1 = fib2;
    fib2 = fibNext;
    if (fib2 % 2 === 0) sum += fib2;
  }
  return sum;
}

module.exports = evenFibsCapped;