// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// TIME COMPLEXITY => O(n^2)
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; i < arr.length; i++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }
//====================================//
// TIME COMPLEXITY => O(n)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4]));

//===============================================================//
// Count Unique Values //
// Implement a function called countUniqueValues, which accepts a sorted array
// and count the unique values in the array.
// There can be negative numbers in the array but it will always be sorted

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
  // return arr.slice(0, i + 1)
}

// console.log(countUniqueValues([1, 1, 1, 1, 2]));
// console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));

//==============================================//

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed.
//  Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

function removeElement(arr, val) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== val) {
      arr[i] = arr[j];
      i++;
    }
  }
  return i;
}

// console.log(removeElement([3,2,2,3], 3))
// console.log(removeElement([0,1,2,2,3,0,4,2], 2))

//====================================//

// Write a function called averagePair.
// Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const avgPair = (arr[left] + arr[right]) / 2;
    if (avgPair === target) {
      return true;
    } else if (avgPair > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string,
// without their order changing.

function isSubsequence(subStr, string) {
  let j = 0;
  for (let i = 0; i < string.length; i++) {
    if (subStr[j] === string[i]) {
      j++;
    }
    if (j === subStr.length) return true;
  }
  return false;
}

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)

// Given an unsorted array and a number n,
// find if there exists a pair of elements in the array whose difference is n.
// This function should return true if the pair exists or false if it does not.

// Part 1 - solve this with the following requirements:

// Time Complexity Requirement - O(n)

// Space Complexity Requirement - O(n)

// function findPair(arr, num) {
//   let freq = {};
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     freq[val] = (freq[val] || 0) + 1;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     let target = val + num;
//     if (freq[target]) {
//       if (num === 0 && freq[val] < 2) continue;
//       return true;
//     }
//   }
//   return false;
// }

// Part 2 - solve this with the following requirements:

// Time Complexity Requirement - O(n log n)

// Space Complexity Requirement - O(1)

function findPair(arr, num) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  while (i < arr.length && j < arr.length) {
    if (i !== j && Math.abs(arr[j] - arr[i]) === Math.abs(num)) {
      return true
    } else if (arr[j] - arr[i] < num) {
      j++
    } else {
      i++
    }
  }
  return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true
console.log(findPair([1, 2, 3], 0)); // false
