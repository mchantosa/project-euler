const evenFibsCapped = require("../lib/pe-2");

//1, 2, 3, 5, 8, 13, 21, 34...
console.log(evenFibsCapped(10) === 10); //2 + 8 = 10
console.log(evenFibsCapped(13) === 10); //2 + 8 = 10
console.log(evenFibsCapped(50) === 44); //2 + 8 + 34 = 44
console.log(evenFibsCapped(4_000_000)); //4613732