"use strict";

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length); //length

// const arr = [1, 2, 3, 4, 5, 6];
// arr.pop();
// console.log(arr); // Oxirgi elementini olib tashlidi

// const arr = [1, 2, 3, 4, 5, 6];
// arr.push(7);
// console.log(arr); // Oxiriga yana bitta element qo'shish

////-----------------------------------------------------------------

// const arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const arr = [1, 2, 3, 4, 5, 6];
// for (let value of arr) {
//   console.log(value);
// }

////-----------------------------------------------------------------

// const arr = [1, 2, 3, 4, 5, 6];
// arr[99] = 0;
// console.log(arr); //(100) [1, 2, 3, 4, 5, 6, empty × 93, 0]

////-----------------------------------------------------------------

//// forEach - 3ta parametr qabul qiladi 1-qiymat 2-index 3-massivni o'zi
//// forEach - Callback qaytaradi
// const arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function (item, index, arr) {
//   console.log(`${index}: ${item} into arr ${arr}`);
// })

////-----------------------------------------------------------------

// const movies = prompt("What is your favorite movie", "");
// console.log(movies); // shuni massiv ko'rinishida chiqazishimiz kerak

// const movies = prompt("What is your favorite movie", "");
// const userMovies = movies.split(", ");
// console.log(userMovies.join("- ")); //['sa', 'ca', 'cc'] massivga ozgartirib beradi

// const movies = prompt("What is your favorite movie", "");
// const userMovies = movies.split(", ");
// userMovies.sort();
// console.log(userMovies.join("-"));

////-----------------------------------------------------------------

const arr = [1, 22, 3, 44, 5, 66];
arr.sort((a, b) => a - b);
console.log(arr); // const arr = [1, 2, 3, 4, 5, 6]; sartirofka qib chiqazib beradi

// function compareFn(a, b) {
//   return a - b;
// }
