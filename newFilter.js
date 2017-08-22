'use strict';

// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const myFilter = function(item){
  return item[0] === 'R';
}

// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(fn(arr[i])){                                 
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(filter(myNames, myFilter));