
// Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
console.log("Task:1 Print odd numbers in an array");
var array =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,];
(function() {
    for (let i = 0; i < array.length; i++) {
        if(array[i]%2 ==1){
            console.log(array[i]);
        }
    
    }
})();

// Convert all the strings to title caps in a string array
console.log("Task:2 convert all the strings to title caps"); 

let myStr="my name is abhay"
function titleCase(str) {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
console.log(titleCase(myStr));



// Sum of all numbers in an array
console.log("Task:3 Sum of all numbers in an array");

let myNumArray = [10,30,20,40,60,80,100,];
(function(){
    let sum = 0;
    for (let i = 0; i < myNumArray.length; i++) {
        sum+= myNumArray[i];
    }
    console.log(sum);
})();
// Return all the prime numbers in an array

console.log("Task:4 return all the prime numbers in an array");

function sumPrimes(num) {
 
    let numArray = [];
    for (let i = 1; i <= num; i++) {
      numArray.push(i);
    }

    //Remove non-prime numbers  
    numArray.map((number) => {
      for (let i = 2; i < number; i++) {
          if(number % i === 0) {
              let index = numArray.indexOf(number);
              return numArray.splice(index, 1);       
          }
      }   
    });
  
   return numArray;
  }
  console.log(sumPrimes(20));


// Return all the palindromes in an array

console.log("Task:5 return all the palindromes in an array");
let palindromeArray = (arr) => {
    //initialize to true
    let isPalindrome = true;
    
    //loop through half length of the array
    for(let i = 0; i < arr.length / 2; i++) {

        //check if first half is equal to the second half
        if(arr[i] !== arr[arr.length - i - 1]){
          isPalindrome = false; 
          break;
        }
    }
    
    return isPalindrome;
}
console.log(palindromeArray([1,2,1,1]));
console.log(palindromeArray([1,2,2,1]));
// Return median of two sorted arrays of same size
console.log("Task:6 return median of two sorted arrays of same size");
let myArr1=[6,3,4,5,2];
let myArr2=[7,6,2,8,9];
let sortarr1=myArr1.sort();
let sortarr2=myArr2.sort();
let sumArr=[...sortarr1,...sortarr2];
// console.log(sumArr);

(function(){
    let Totalsum = 0;
    for (let i = 0; i < sumArr.length; i++) {
        Totalsum+= sumArr[i];
    }
    console.log("Median:" ,Totalsum/2);
})();

// Remove duplicates from an array

console.log("Task:7 remove duplicates from an array");
let chars = ['A', 'B', 'A', 'C', 'B'];
let arrnum=[3,5,6,3,2,6,5];
let uniqueChars = [...new Set(chars)];
let uniqearrnum = [...new Set(arrnum)];
console.log(uniqearrnum);
console.log(uniqueChars);



