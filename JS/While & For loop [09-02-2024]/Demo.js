// Loops - For, while, do while, for in, for of

// while loop
// let i=6;
// while(i<5){
//     console.log(i);
//     i++;
// }

// do while
// let i = 6;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// Nested Loops - for, while, do while

// Nested for Syntax

// let line = 1;

// for(let i=0;i<5;i++){  // outer loop
//     for(let j=0;j<3;j++){ // inner loop
//         for(let k=0;k<2;k++){
//             console.log(line++); // 5*3*2;
//         }
//     }
// }

// Nested while Syntax

// let i = 0;
// let j = 0;
// while (i < 5) {
//   while (j < 3) {
//     j++;
//   }
//   console.log(i, j);
//   i++;
// }

// Problems - Pattern Printing, Series Sum, Matrix, SubArrays.....

// Square Pattern
// N=3;
// * * *
// * * *
// * * *

// let N=9;

// for(let i=1;i<=N;i++){ // Outer-Loop
//     let bag = "";
//     for(let j=1;j<=N;j++){ // Inner-Loop
//         bag+="* "
//     }
//     console.log(bag);
// }

// Blank Square Pattern
// * * * *
// *     *
// *     *
// * * * *

// let N=4;

// for(let i=1;i<=N;i++){ // Outer-Loop
//     let bag = "";
//     for(let j=1;j<=N;j++){ // Inner-Loop
//         if(i==1 || i==N){
//             bag+="* ";
//         }
//         else if(j==1 || j==N){
//             bag+="* ";
//         }
//         else{
//             bag+="  ";
//         }
//     }
//     console.log(bag);
// }

// V pattern

// function printPattern(N) {
//     for(let i=N;i>0;i--){
//         let bag="";
//         for(let j=1;j<=N;j++){
//             if(j<i){
//                 bag+="* "
//             }
//             else if(j==i){
//                 bag+="*"
//             }
//             else{
//                 bag+="  "
//             }
//         }
//         console.log(bag);
//     }
// }

// SubStrings - All SubStrings

// let str = "masai"; // m, ma, mas, masa, masai, a, as, asi, sai, ai, i

// for (let i = 0; i < str.length; i++) {
//   let bag = "";
//   for (let j = i; j < str.length; j++) {
//     bag += str[j];
//     console.log(bag);
//   }
// }

// SubStrings - exist of not

// let str = "quickbrownfoxjumpsoverthelazydog";

// let subStr = "high";

// function check(str, subStr) {
//   for (let i = 0; i < str.length; i++) {
//     let bag = "";
//     for (let j = i; j < str.length; j++) {
//       bag += str[j];
//       if (bag == subStr) {
//         console.log("true");
//         return;
//       }
//     }
//   }
//   console.log("false");
//   return;
// }

// check(str, subStr);

// Max occurences

// function maximumOccurences(N, arr) {
//   let str = "abcdefghijlkmnopqrstuvwxyz";
//   let myArr = Array(26).fill(0);

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (arr[i] == str[j]) {
//         myArr[j]++;
//         break;
//       }
//     }
//   }

//   let max = -Infinity;
//   let stored = -1;
//   for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] > max) {
//       max = myArr[i];
//       stored = i;
//     }
//   }
//   console.log(str[stored]);
// }


