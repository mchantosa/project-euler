/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
  we get 3, 5, 6 and 9. The sum of these multiples is 23. 
  Find the sum of all the multiples of 3 or 5 below 1000. 

BP: 
- Find multiples of 3 < 1000
- Find multiples of 5 < 1000
- Add and return multiples

Implementation:
  - Find multiples of 3 < 1000
  - Find multiples of 5 < 1000
  - Add and return multiples

BV, EC, Assumptions:
- < 3: return 0
- number will be >= 0
- number will be a number

Test Cases:
  - findSums35(10) = 3 + 5 + 6 + 9 = 23
  - findSums35(5) = 3
  - findSums35(3) = 0
  - findSums35(20) = [3, 6, 9, 12, 15, 18, 5, 10, 15] summed
*/

//function findSumOfMultiples35(n){ }

function getMultiples(num, multiplier){
  const multiples = [];
  const terminalIndex = (Math.floor(num/multiplier) === num/multiplier) ? 
    num/multiplier - 1 : Math.floor(num/multiplier);
    
  for(index = 1; terminalIndex; index++){
    multiples.push(index * multiplier)
  }
  return multiples;
}

console.log(getMultiples(10, 3)); //[3, 6, 9]
console.log(getMultiples(10, 5)); //[5]