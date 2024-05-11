// HOF -> Higher Order Function

function x() {
   let x = 10;
   console.log("Value of x", x);
}

function hof(f) {
   console.log("Value of f", f);
   f()
}

hof(x) // hof 
// x is a callback function

// HOF
// A function that takes another function as its argument.
// for example: hof()

// callback function
// A function which is passed as an argument
// for example: x()
