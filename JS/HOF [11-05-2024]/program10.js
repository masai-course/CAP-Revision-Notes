// We need to filter out those names who can vote

let people = [
   {
      name: "Huzaifa",
      age: 52,
   },
   {
      name: "Parth",
      age: 25,
   },
   {
      name: "Sumit",
      age: 15,
   },
   {
      name: "Rinka",
      age: 13,
   },
   {
      name: "Tushar",
      age: 18,
   },
];

// let votingNames = people.filter(({age}, index, array) => {
//    return age >= 18;
// });

let votingNames = people.filter(({ age }) => age >= 18);

console.log(votingNames);


// Homework:
// sort