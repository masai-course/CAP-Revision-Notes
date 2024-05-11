let arr = [1, 2, 3, 4, 5];

let sum = 0;
let product = 1;
arr.forEach(function (element, index, array) {
   sum = sum + element;
   product = product * element;
});

console.log("Sum of array", sum);
console.log("Product of array", product);
