// ATTEMPT THIS IS YOU ARE UP FOR IT!
// Implement a function called bubbleSort.
// Given an array, bubbleSort will sort the values in the array.
// The function takes 2 parameters: an array and an optional comparator function.

function bubbleSort(arr, comparator) {
  if (typeof comparator !== "function") {
    // provide a default
    comparator = function (a, b) {
      return a - b;
    };
  }
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
// The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

// The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

// Examples

// console.log(bubbleSort([4, 20, 12, 10, 7, 9], strComp)); // [4, 7, 9, 10, 12, 20]
// console.log(bubbleSort([0, -10, 7, 4], strComp)); // [-10, 0, 4, 7]
// console.log(bubbleSort([1, 2, 3], strComp)); // [1, 2, 3]
// console.log(bubbleSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
// console.log(bubbleSort(nums, strComp)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

// console.log(bubbleSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

// console.log(bubbleSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order

// Selection Sort

// Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
// Repeat this with the next element until the array is sorted.

// Examples

function selectionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b;
    };
  }
  for (let i = 0; i < arr.length; i++) {
    let lowestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], arr[lowestIndex]) < 0) {
        lowestIndex = j;
      }
    }
    if (i !== lowestIndex) {
      let temp = arr[i];
      arr[i] = arr[lowestIndex];
      arr[lowestIndex] = temp;
    }
  }
  return arr;
}

// console.log(selectionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// console.log(selectionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
// console.log(selectionSort([1, 2, 3])); // [1, 2, 3]
// console.log(selectionSort([]));

var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
// console.log(selectionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

// console.log(selectionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

// console.log(selectionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order

// Insertion Sort

function insertionSort(arr, comparator) {
    if (typeof comparator !== "function") {
    comparator = function (a, b) {
      return a - b;
    };
  }
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && comparator(arr[j], currentVal) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(insertionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(insertionSort([1, 2, 3])); // [1, 2, 3]
console.log(insertionSort([]));
