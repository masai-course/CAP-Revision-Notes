// Tell me the difference between forEach and map?

// 1. map returns an array whereas forEach does not
// 2. If you just want to iterate over your array, then go ahead with forEach
// 3. If you want to create a new array, then go ahead with map
// some examples

// HOF
// map

let arr = [1, 2, 3, 4, 5];
// element -> square
// updated -> [1, 4, 9]

// [ 1, 4, 9, 16, 25]
// element = 3
// index = 2
let x = arr.map(function (element, index, array) {
    return element ** 2; // 3**2 -> 9
})

console.log("Value of x", x);

// for (let i = 0; i < arr.length; i++) {
//    arr[i] = arr[i] ** 2;
// }

// console.log(arr);
