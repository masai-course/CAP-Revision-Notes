// For loop / While loop

// - Repetetive Tasks

// - ex - hello world 100 time,  interation, finding a condition, tables

// Syntax - For Loop

// for(let i=0;i<=10;i+=2){
//   console.log("hello "+i);
// }

// Syntax - While loop

// let i=0;
// while(i<=10){
//   console.log("hello "+i);
//   let a = 4;
//   i+=a;
// }

//  find the first occurence of a number which is divisible by 10 and 12 both.

// let flag = 5;

// let i=1;
// while(true){
//   if(i%9==0 && i%15==0){
//     console.log(i);
//     break;
//   }
//   i++;
// }

// for(let i=1;true;i++){
//   if(i%9==0 && i%15==0){
//       console.log(i);
//       break;
//     }
// }

































// ### 1. Multiplication Table Question:
// Write a JavaScript program that takes a number as input and prints its multiplication table up to 10.

// **Sample Input:**
// ```
// 5
// ```

// **Sample Output:**
// ```
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50
// ```

// let num = 6;

// for(let i=1;i<=10;i++){
//   console.log(`${num} * ${i} = ${i*num}`);
// }























// ### 2. Find the First Occurrence of K in that Array:
// Write a JavaScript program that takes an array of numbers and a target number `K`. Find and print the index of the first occurrence of `K` in the array.

// **Sample Input:**
// ```
// Array: [3, 7, 1, 9, 4, 6, 8]
// K: 4
// ```

// **Sample Output:**
// ```
// Index of 4: 4
// ```

// let arr = [3, 7, 1, 9, 4, 6, 8, 1]
// let k = 1;

// for(let i=0;i<arr.length;i++){
//   if(arr[i]===k){
//     console.log(i);
//     break;
//   }
// }

















// ### 3. Question that Uses `continue` Keyword:
// Write a JavaScript program that prints all the even numbers between 1 and 20 using a `for` loop. Use the `continue` keyword to skip printing odd numbers.

// **Sample Output:**
// ```
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
// ```

// for(let i=1;i<=20;i++){
//   if(i%2==1){
//     break;
//     console.log("hello");
//   }
//   console.log(i);
// }
























// ### 4. Find out Prime Number:
// Write a JavaScript program that takes a number as input and checks whether it is a prime number or not.

// **Sample Input:**
// ```
// 7
// ```

// **Sample Output:**
// ```
// 7 is a prime number.
// ```

// let num=15;
// let count = 0;

// for(let i=1;i<=num;i++){
//   if(num%i==0) count++;
  
// }
// if(count == 2) console.log("Yes")
// else {
//   console.log(count, "No");
// }
























// ### 5. Palindrome Detection:
// Write a JavaScript program that takes a string as input and checks whether it is a palindrome or not (ignoring spaces and case).

// **Sample Input:**
// ```
// "A man a plan a canal Panama"
// ```

// **Sample Output:**
// ```
// The string is a palindrome.
// ```
// let str = "A man a plan a canal Panama"

// // let str = "naman"
// let bag  ="";
// let bag2 ="";



// str = str.toUpperCase();

// for(let i=0;i<str.length;i++){
//   if(str[i]==" ") continue;
//   bag2+=str[i];
// }

// for(let i=bag2.length-1;i>=0;i--){
//   bag+=bag2[i];
// }
// if(bag==bag2){
//   console.log("yes")
// }
// else console.log("no");
























// ### 6. Factorial:
// Write a JavaScript program that calculates the factorial of a given number using a `while` loop.

// **Sample Input:**
// ```
// 5
// ```


// **Sample Output:**
// ```
// Factorial of 5 is 120
// ```

// let num = 6;

// // 5*4*3*2*1 = 120
// let prod = 1;
// while(num>0){
//   prod*=num;
//   num--;
// }
// console.log(prod);



// let str = "ankush";

// let v = 0;
// let c = 0;

// for(let i=0;i<str.length;i++){
//   if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' ){
//     v++;
//   }
//   else{
//     c++;
//   }
// }

// console.log(v,c)
// console.log(c);



let str = "naman";
let RStr = str.split("").reverse().join('');
    if (str === RStr) {
        console.log('Yes');
    } 
    else {
        console.log('No');
    }
