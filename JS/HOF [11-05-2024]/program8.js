// filter
// In filter, return inside the function expects a Boolean value

function isPrime(num) {
   let factor = 0;
   for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
         factor++;
      }
   }
   return factor === 2;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// element = 4
// index = 3
// x = [2, 4]
let x = arr.filter(function (element) {
   return element > 5;
});

console.log(x);

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 === 1) {
//       newArr.push(arr[i]);
//    }
// }

// console.log(newArr);
