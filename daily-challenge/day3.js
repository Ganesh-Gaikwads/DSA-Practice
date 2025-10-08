// 🧩 Day 3 – JS Logic Challenge
//   Problem 1: Find the Second Largest Number

const arr = [10, 40, 30, 20, 50];

// using sorting  method

const secondLargest = (arr) => {
  let sortArr = arr.sort();
  let result = sortArr[sortArr.length - 2];
  return result;
};

console.log(`second Largest number in Array :`, secondLargest(arr));

// using logic and loop

function findsecLargenum(arr) {
  let max = -Infinity;
  let secMax;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      secMax = max;
      max = arr[i];
    } else if (secMax < arr[i] && max > arr[i]) {
      secMax = arr[i];
    }
  }

  return secMax;
}

console.log(" second max number using loop and logic :", findsecLargenum(arr));

// problem-2 =>  Check if Two Strings are Anagrams

function checkAnagram(str1, str2) {
  let a = str1.split("").sort().join();
  let b = str2.split("").sort().join();

  if (a === b) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAnagram("listen", "silent"));


// Problem 3: Find the Most Frequent Element in an Array;

const array = [1,2,2,3,3,3,4];

function mostFrequent(arr) {
  let count = {};
  let maxCount = 0;           // make names consistent
  let mostFreqItem = null;

  // Count occurrences
  for (let el of arr) {
    count[el] = (count[el] || 0) + 1;
  }

  // Find the most frequent
  for (let key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
      mostFreqItem = key;
    }
  }

  return `The most frequent item is ${mostFreqItem} with ${maxCount} occurrences`;
}

console.log(mostFrequent(array));
