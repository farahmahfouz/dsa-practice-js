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

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("listen", "Silent"));
console.log(isAnagram("apple"));
console.log(isAnagram(null, "abc"));
console.log(isAnagram("", ""));
