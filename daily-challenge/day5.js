// 🧩 Problem 1: Count Occurrences of Each Element

function countOccurrences(arr) {
  const count = {};
  for (let item of arr) {
    count[item] = (count[item] || 0) + 1;
  }
  return count;
}

console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]));


// 🧩 Problem 2: Find Key with Maximum Value in Object

function topScorers(obj) {
  let maxScore = -Infinity;
  let toppers = [];

  for (let key in obj) {
    if (obj[key] > maxScore) {
      maxScore = obj[key];
      toppers = [key];
    } else if (obj[key] === maxScore) {
      toppers.push(key);
    }
  }

  return toppers;
}

const scores = { Ram: 87, Shyam: 93, Geeta: 75, Seeta: 93 };
console.log("Highest Scorers:", topScorers(scores));


// 🧩 Problem 3: Word Frequency Counter (String to Object)

function wordFrequency(str) {
  const words = str.toLowerCase().split(" ");
  const count = {};

  for (let word of words) {
    count[word] = (count[word] || 0) + 1;
  }

  return count;
}

console.log(wordFrequency("I love JavaScript and I love coding"));
