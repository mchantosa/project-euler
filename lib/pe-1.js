'use strict';

function findSumOfMultiples35(num) {
  let sum = 0;
  for (let index = 1; index < num; index++) {
    if ((index % 3 === 0) || (index % 5 === 0)) sum += index;
  }
  return sum;
}

module.exports = findSumOfMultiples35;