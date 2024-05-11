// reduce
// accumulator -> default -> 0

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// index = 9
// element = 10
// accumulator = 55
let x = arr.reduce(function (accumulator, element, index, array) {
   return `${accumulator} ${element}`;
}, "");

console.log(x);
