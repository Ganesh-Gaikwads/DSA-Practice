// 🧩 Day 2 – JavaScript Logic Questions

// problem -1 => Find the Maximum Number in an Array.
/*
function maxNum(arr){
  let max = [0];
  for(let i=0; i<arr.length; i++){
    if(max<arr[i]){
      max = arr[i]
    }
  }
  return `max number in Array ${max}`;
}
console.log(maxNum([23,43,65,34,56]));



// using max method 

function maxNumber(arr){
  let maxNum = 0 ;
   maxNum = Math.max(...arr);
   return  maxNum;
}
console.log(maxNumber([23,43,65,34,56]));


// Problem 2- REmove duplicates form an array

// using loop and includes(---)
function removeDup(arr){
  let newArr=[];
  for(let ar of arr){
    if(!newArr.includes(ar)){
    newArr.push(ar);
  }
  }
  return newArr;
}

console.log(removeDup([1,2,3,5,10,10,5,5,6,3,6,2,3,7,7]));

// using set method 
 let arr = [1,2,2,3,3,4,5,5,6,]
 const removeDp = (arr)=>[...new Set(arr)];
 console.log(removeDp(arr));
*/

 // problem -3 Count Occurrences of Each Element;

 function countOccurance(arr){
 
  let count = {}
  for(let item of arr){
    if(count[item]){
      count[item]++;
    } else{
      count[item] = 1;
    }
  }
  return count;

 }

 console.log(countOccurance(['q','d','q','d','a','b']));