function idOddInList(list) {
  if (list.length === 0) return false;
  if (list[0] % 2 !== 0) return true;
  return idOddInList(list.slice(1));
}

// console.log(idOddInList([3142, 5798, 6550, 5914]));

// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= i;
//   }
//   return total;
// }

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24

/// Helper Method Recursive

// function outer(input) {
//   let outerScopedVariable = [];

//   function helper(helperInput) {
//     helper(helperInput--);
//   }

//   helper(input);

//   return outerScopedVariable;
// }

// function collectOddValues(arr) {
//   let result = [];
//   function helper(helperInput) {
//     if (helperInput.length === 0) return;
//     if (helperInput[0] % 2 !== 0) {
//       result.push(helperInput[0]);
//     }
//     helper(helperInput.slice(1));
//   }

//   helper(arr);

//   return result;
// }

// Pure Recursion

function collectOddValues(arr) {
  let newArray = [];

  if (arr.length === 0) return newArray;
  if (arr[0] % 2 !== 0) {
    newArray.push(arr[0]);
  }

  newArray = newArray.concat(collectOddValues(arr.slice(1)));
  return newArray;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
