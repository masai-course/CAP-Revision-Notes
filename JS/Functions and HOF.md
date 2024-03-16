```markdown
# Functions and Higher-Order Functions (HOF)

In JavaScript, functions are blocks of code that can be executed multiple times. They can accept parameters and return values. Here's a basic function example:

```javascript
function sum(a, b) {
  if (a > b) {
    return a + b;
  } else {
    return a - b;
  }
}

console.log(sum(15, 10)); // Output: 25
console.log(sum(4, 7));   // Output: -3
```

## Callback Functions

Callback functions are functions passed as arguments to another function to be executed later. For instance:

```javascript
function abc() {
  setInterval(() => {
    console.log("Hello");
  }, 1000);
}

abc(); // Calls abc function, which prints "Hello" every second
```

## Higher-Order Functions (HOF)

Higher-order functions are functions that can accept other functions as arguments or return functions as output. Some common examples are `forEach`, `map`, `filter`, `reduce`, and `sort`.

### forEach

```javascript
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let sum = 0;

arr.forEach((ele) => {
  sum += ele;
});

console.log(sum); // Output: 45
```

### Map

```javascript
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let res = arr.map((ele) => {
  return ele * 3;
});

console.log(res); // Output: [27, 24, 21, 18, 15, 12, 9, 6, 3]
```

### Filter

```javascript
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let res = arr.filter((ele) => {
  return ele % 2 === 0;
});

console.log(res); // Output: [8, 6, 4, 2]
```

### Reduce

```javascript
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let sum = arr.reduce((acc, ele) => {
  return acc + ele;
}, 0);

console.log(sum); // Output: 45
```

### Chaining

```javascript
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let res = arr.map((ele) => {
  return ele * 3;
}).filter((ele) => {
  return ele % 2 === 0;
}).reduce((acc, ele) => {
  return acc + ele;
}, 0);

console.log(res); // Output: 72
```

### Sort

```javascript
let arr = [9, 8, 7, 6, 5, 4, 3, 29, 10];
arr.sort((a, b) => {
  return a - b;
});

console.log(arr); // Output: [3, 4, 5, 6, 7, 8, 9, 10, 29]
```

These higher-order functions are powerful tools in JavaScript for working with arrays in a functional and declarative manner.
