'use strict';

/*
  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
*/

const factor = (num, factor) => {
  let reducedNum = num;
  while (reducedNum % factor === 0) reducedNum /= factor;
  return reducedNum;
};  //factor(120, 2) = 15,  factor(13, 13) = 1


const collectFactors = (num, start = 2) => {
  for (let index = start; index <= num; index++) {
    if (num % index === 0) {
      return [index, collectFactors(factor(num, index), index + 1)];
    }
  }
  return [];
};  //collectFactors(120) = [2, [3, [5, []]]],  collectFactors(13) = [13, []]

function primeFactors(num) {
  const factors = [];
  if (num <= 3) return factors;
  let tree = collectFactors(num);
  if (tree[0] === num) return factors;

  while (tree.length === 2) {
    factors.push(tree[0]);
    tree = tree[1];
  }
  return factors;
} //primeFactors(120) = [2, 3, 5],  primeFactors(13) = []

module.exports = primeFactors;
