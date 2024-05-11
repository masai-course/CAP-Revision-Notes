// forEach

let arr = [
   "Mango",
   "Apple",
   "Orange",
   "Watermelon",
   "Chiku",
   "Banana",
   "Lichi",
];

// Tell me the index number of 'Watermelon' in my array

arr.forEach(function (element, index, array) {
   if (element === "Lichi") {
      console.log(index);
   }
});
