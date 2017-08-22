'use strict';
function fizzbuzz(countTo){
  let fizzBuzzArr = [];
  for (let i = 1; i <= countTo; i++){
    switch(true){
      case (i % 15) === 0:
      fizzBuzzArr.push("fizzbuzz");
        break;
        case (i % 3) === 0:
          fizzBuzzArr.push("fizz");
        break;
        case (i % 5) === 0:
          fizzBuzzArr.push("buzz");
        break;
        default:
        fizzBuzzArr.push(i);
    }
  }
  return fizzBuzzArr;
}

console.log(fizzbuzz(15));