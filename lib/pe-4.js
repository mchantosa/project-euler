'use strict';

/*
  A palindromic number reads the same both ways.
  The largest palindrome made from the product of two 2-digit
    numbers is 9009 = 91 × 99.
  Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isNumberPalindrome = (num) => {
  const numString = String(num);
  return numString === [...numString].reverse().join('');
};

const startIterator = (num) => {
  let factor = '1';
  for (let digit = 0; digit < num - 1; digit++) factor += '0';
  return Number(factor);
};

const endIterator = (num) => startIterator(num + 1) - 1;

function findLargestPalindromeProduct(num) {
  let largestPalindrome = 0;
  const start = startIterator(num);
  const end = endIterator(num);
  for (let num1 = start; num1 <= end; num1++) {
    for (let num2 = start; num2 <= end; num2++) {
      const prod  = num1 * num2;
      if (isNumberPalindrome(prod) && (prod > largestPalindrome)) {
        largestPalindrome = prod;
      }
    }
  }
  return largestPalindrome;
}

module.exports = findLargestPalindromeProduct;