// DSA x JS Series – Day 1 💪

// Problem 1: Reverse a String-> Write a function reverseString(str) that takes a string and returns the reversed version.

function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
reverseString("Hello")



// Problem 2: Find Largest Number in an Array -> Write a function findMax(arr) that returns the maximum number in the array.

function findMax(arr) {
  let max = -Infinity;
  for (let el of arr) {
    if (max < el) max = el;
  }
  return max;
}
console.log(findMax([10, 20, 4, 99, 56])); 


// Problem 3: Check if String is a Palindrome;->Palindrome = reads the same forward & backward.
// Write a function isPalindrome(str) that returns true if it’s a palindrome, otherwise false.

function isPalindrome(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result === str ;
}

console.log(isPalindrome("level"));