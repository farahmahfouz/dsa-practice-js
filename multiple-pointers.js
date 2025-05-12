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
}

// console.log(countUniqueValues([1, 1, 1, 1, 2]));
// console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));

//==============================================//

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

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

