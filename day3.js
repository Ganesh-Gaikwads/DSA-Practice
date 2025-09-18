// Problem 1: Sum of Digits ==>>  Write a function sumOfDigits(num) that returns the sum of all digits of a number.

function sumOfDigits(num){
  let result = 0;
  num = Math.abs(num)
 while(num > 0){
  result+= num%10;
  num=Math.floor(num/10)

 }
 return result;

} 
console.log(sumOfDigits(1234));

//  1. conditionals
  
function checkNumber(n){
  if(n>0){
    console.log( "Positive");
  } else if( n<0){
    console.log("Negetive");
  } else{
   console.log("Zero");
  }
}  
 checkNumber(0);


 // Strings==> Write a function reverseWords(str) that reverses only the words in a sentence.

 function reverseWords(str){
   return str.split(' ').reverse().join(' ');
 }
  console.log(reverseWords("I Love JS"));


  // Arrays ==> Given [2, 4, 7, 9, 12, 15], return a new array of only even numbers.

  let arr = [2, 4, 7, 9, 12, 15];
  let even = [];

 
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2===0){
      even.push(arr[i])
    }
  }
  console.log(even);

  // using filter();

  let evenArr = arr.filter((el)=>el%2===0);
  console.log("using filter method:",evenArr);
 

  // Loops + Sum ==>> Write a function sumOfSquares(arr) that takes [1, 2, 3, 4] and returns 1² + 2² + 3² + 4² = 30.
 
  function sumOfSquares(arr){
    let result=0; 
    for(let el of arr){
     result+= el*el;
    }
    return result;
  }
    console.log(sumOfSquares([1,2,3, 4]));;
 
    // Objects + Array :-  Given an array of students : Write a function passedStudents(students) that returns an array of names of students with score >= 40.

    let students = [
      { name: "Ganesh", score: 35 },
      { name: "Rahul", score: 55 },
      { name: "Sita", score: 75 },
    ];
 
    function passedStudents( key){
       let result = [];
   for(let key of students){
   
    if(key.score>=40){
      result.push(key.name)
 
    }
    
   }
   return result;
    }
 console.log(passedStudents(students));








    







 