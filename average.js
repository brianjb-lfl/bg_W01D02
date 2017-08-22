'use strict';
function average(numbers){
  let sum = 0;
  numbers.forEach(item => sum += item);
  return sum/numbers.length;
}

console.log(average([1,2,3]));