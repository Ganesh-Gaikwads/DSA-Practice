// DSA x JS – Day 2 Problems 🚀

// Problem 1: Factorial of a Number => Write a function factorial(n) that returns the factorial of n.
//👉 Example: factorial(5) → 120

function factorial(n) {
  let result = 1;

  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

factorial(5);

//  Problem 2: Count Vowels in a String-Write a function countVowels(str) that counts how many vowels (a, e, i, o, u) are in the string.

function countVowels(str) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      result++;
    }
  }
  return result;
}
countVowels("hello guys");

// Problem 3: Find Second Largest Number in an Array- Write a function secondMax(arr) that returns the second largest number in the array.

function secondMax(arr) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (firstMax < arr[i]) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (secondMax < arr[i] && arr[i] < firstMax) {
      secondMax = arr[i];
    } else if (secondMax === -Infinity) {
      return "Not found";
    }
  }
  return secondMax;
}

secondMax([71, 82, 43, 74, 56, 68]);
console.log(secondMax([100, 10, 1000]));
