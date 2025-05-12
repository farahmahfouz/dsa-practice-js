// Brute force solution -- TIME COMPLEXITY => O(n^2)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) return false;
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// => INDEXOF has another for loop inside it

//====================================//

// TIME COMPLEXITY => O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  // 1- make an objects to return in the end
  let frequencyObj1 = {};
  let frequencyObj2 = {};
  // 2- loop for every single array
  for (let i = 0; i < arr1.length; i++) {
    let key = arr1[i];
    frequencyObj1[key] = (frequencyObj1[key] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    let key = arr2[i];
    frequencyObj2[key] = (frequencyObj2[key] || 0) + 1;
  }
  // 3- compare the squared frequencies
  for (let key in frequencyObj1) {
    if (!(key ** 2 in frequencyObj2)) return false;
    if (frequencyObj2[key ** 2] !== frequencyObj1[key]) return true;
  }
  return true;
}

//====================================//
// TIME COMPLEXITY => O(n log n) because of sorting

// function same(arr1, arr2) {
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2[i] !== arr1[i] ** 2) return false;
//   }
//   return true;
// }
// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

//===========================================================//
// TIME COMPLEXITY => O(n)

function isAnagram(first, second) {
  if (!first || !second) return false;

  first = first.toLowerCase();
  second = second.toLowerCase();

  if (first.length !== second.length) return false;
  // 1- make an object
  let result = {};
  // 2- loop for word
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    result[letter] = (result[letter] || 0) + 1;
  }
  // 3- check if exist
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!result[letter]) return false;
    result[letter] -= 1;
  }
  return true;
}

//====================================//
// TIME COMPLEXITY => O(n log n) because of sorting

// function isAnagram(first, second) {
//   if (!first || !second) return false;
//   return (
//     first.toLowerCase().split("").sort().join("") ===
//     second.toLowerCase().split("").sort().join("")
//   );
// }

// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("listen", "Silent"));
// console.log(isAnagram("apple"));
// console.log(isAnagram(null, "abc"));
// console.log(isAnagram("", ""));

//====================================//

// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);
  if (str1.length !== str2.length) return false;
  let result = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    result[letter] = (result[letter] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!result[letter]) return false;
    result[letter] -= 1;
  }
  return true;
}

// Sample Input:

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

//====================================//

// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
//  and checks whether there are any duplicates among the arguments passed in.
//  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Time - O(n)

// Space - O(n)
// Examples:
// function areThereDuplicates(...args) {
//   let result = {};
//   for (let i = 0; i < args.length; i++) {
//     let letter = args[i];
//     result[letter] = (result[letter] || 0) + 1;
//   }
//   for (let key in result) {
//     if (result[key] > 1) return true;
//   }
//   return false;
// }

function areThereDuplicates(...args) {
  let result = {};
  for (let i = 0; i < args.length; i++) {
    let letter = args[i];
    if (result[letter]) return true;
    result[letter] = 1;
  }

  return false;
}

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates("a", "b", "c", "a")); // true

// Frequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once.
// Find all the elements that appear twice in this array. Note that you can return the elements in any order.

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1
// Time Complexity - O(n)

function findAllDuplicates(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    result[num] = (result[num] || 0) + 1;
  }
  let duplicates = [];
  for (let key in result) {
    if (result[key] === 2) {
      duplicates.push(+key);
    }
  }
  return duplicates;
}
