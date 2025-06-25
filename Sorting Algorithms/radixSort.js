function getDigit(num, place) {
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigist = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigist = Math.max(maxDigist, digitCount(nums[i]));
  }
  return maxDigist;
}


function radixSort(arr) {
  let maxDigistCount = mostDigits(arr);
  for (let k = 0; k < maxDigistCount; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }
  return arr;
}

// console.log(radixSort([23, 567, 89, 12234324, 90]));
