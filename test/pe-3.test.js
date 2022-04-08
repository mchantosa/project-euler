const primeFactors = require("../lib/pe-3");

console.log(primeFactors(1).join(',') === [].join(','));
console.log(primeFactors(2).join(',') === [].join(','));
console.log(primeFactors(3).join(',') === [].join(','));
console.log(primeFactors(13).join(',') === [].join(','));
console.log(primeFactors(2 * 2).join(',') === [2].join(','));
console.log(primeFactors(2 * 3).join(',') === [2, 3].join(','));
console.log(primeFactors(2 * 2 * 3).join(',') === [2, 3].join(','));
console.log(primeFactors(2 * 2 * 3 * 3 * 3).join(',') === [2, 3].join(','));
console.log(primeFactors(5 * 17).join(',') === [5, 17].join(','));

console.log(primeFactors(13));
console.log(primeFactors(4));
console.log(primeFactors(6));
console.log(primeFactors(12));
console.log(primeFactors(36));
console.log(primeFactors(13195));
console.log(primeFactors(600851475143));