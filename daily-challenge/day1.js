// Everday 3 problems 

// Problem 1: Reverse a String 
// Write a function that takes a string and returns it reversed.


// using backword loop
 
function stringRev(str){
  let reversed = '';
  for(let i=str.length-1; i>=0; i--){
      reversed+=str[i];
  }
  return reversed;
}

 stringRev("ganesh") ;

// using built in methods 

function reverseStr(str){
   return str.split('').reverse().join('');
}
 reverseStr("Gaikwad")





 // Problem -2 : Count Vowels in a String =>Count how many vowels (a, e, i, o, u) are present in a given string.

//  using loop
 

function countVowel(str){
  let count = 0;
  for(let i=0; i<str.length; i++){
    let ch = str[i].toLowerCase();
    if(ch ==="a" ||
       ch ==="e" ||
       ch === "i" ||
       ch ==="o" ||
       ch ==="u"
    ) count++;
  }
  return count;
}
 countVowel("Javascript");



// using built in methods -includes();

 

 function findVowels(str){
  const Vowels = ["a","e","i","o","u"];
  let  count = 0;
  for(let char of str.toLowerCase()){
    if(Vowels.includes(char)){
      count++;
    }
  }
  return count;
 } 

findVowels("JavaScript"); 

// Problem 3: Sum of Digits => Write a program to find the sum of digits of a given number.

 
 
function sumOfDigits(num){
  let sum = 0;
  while(num > 0){
    sum+= num%10;
    num = Math.floor(num/10);
  }
  return sum;
} 

console.log(sumOfDigits(12345));


 
