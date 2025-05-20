// Given a sorted array of integers,
// write a function called search, that accepts a value and returns the index where the value
// passed to the function is located. if the value not found return -1

function search(arr, value) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    if (currentElement < value) {
      min = middle + 1;
    } else if (currentElement > value) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
