'use strict';
function fizzbuzz(countTo){
  let fizzBuzzArr = [];
  for (let i = 1; i <= countTo; i++){
    switch(i%15){
      case 0:
        fizzBuzzArr.push("fizzbuzz");
        break;
      case (3):
      case (6):
      case (9):
      case (12):
        fizzBuzzArr.push("fizz");
        break;
      case 5:
      case 10:
        fizzBuzzArr.push("buzz");
        break;
      default:
        fizzBuzzArr.push(i);
    }
  }
  return fizzBuzzArr;
}

console.log(fizzbuzz(15));