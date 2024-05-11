let sumOfArr = 0;

function sum(element, index, array) {
    sumOfArr += element;
}

let arr = [1, 2, 3, 4, 5];

let x = arr.forEach(sum);

// console.log(sumOfArr);
console.log(x);
