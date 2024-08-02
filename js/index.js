// forEach metodiga oid masalalar

// 1 - masala

// let arr = [1,2,3,4,5];
// let res = arr.forEach(function(value) {
//     console.log(value * 2);
// })

// 2 - masala

// function printUpperCaseWords(words) {
//   words.forEach((word) => {
//     console.log(word.toUpperCase());
//   });
// }
// const words = ["apple", "banana", "cherry"];
// printUpperCaseWords(words);

// 3 - masala

// function addFiveAndPrint(array) {
//   let newArray = [];
//   array.forEach((element) => {
//     newArray.push(element + 5);
//   });
//   console.log(newArray);
// }
// const numbers = [1, 2, 3, 4, 5];
// addFiveAndPrint(numbers);

// Map metodiga oid masalalar

// 1 - masala

// let arr = [1,2,3,4,5];
// let res = arr.map(function(value) {
//     return value * 2;
// })
// console.log(res);

// 2 - masala

// const words = ['apple', 'banana', 'cherry'];
// const res = words.map(function(value) {
//     return value.toUpperCase()
// })
// console.log(res);

// 3 - masala

// let arr = [10,20,30,40];
// let res = arr.map(function(value) {
//     return value + 5;
// })
// console.log(res);

// filter metodiga oid masalalar

// 1 - masala

// let arr = [1,2,3,4,5,6,7,8,9];
// let res = arr.filter(function(value) {
//     return value % 2 == 0
// })
// console.log(res);

// 2 - masala

// let arr = ["salom", "bye", 'alvido', 'Java'];
// let res = arr.filter(function(value) {
//     return value.length > 5
// })
// console.log(res);

// 3 - masala

// function filterAge(ages) {
//   const age = ages.filter((age) => age > 18);
//   return age;
// }
// const ages = [12, 17, 18, 19, 21];
// const result = filterAge(ages);
// console.log(result);

// find metodiga oid masala

// const numbers = [4, 9, 11, 2, 18];
// const result = numbers.find(num => num > 10);
// console.log(result);

// some/every metodiga oid masalalar

// 1 - masala

// function hasPositiveNumber(numbers) {
//   return numbers.some((num) => num > 0);
// }
// const numbers = [-1, -2, 3, -4];
// console.log(hasPositiveNumber(numbers));

// 2 - masala

// const words = ['cat', 'dog', 'elephant'];
// function wordsLength(str) {
//     return str.some((words) => words.length > 5);
// }
// console.log(wordsLength(words));

// 3 - masala

// const numbers = [1, 2, 3, 4];
// function musbatSon(arg) {
//     return numbers.some((num) => num > 0);
// }
// console.log(musbatSon(numbers));