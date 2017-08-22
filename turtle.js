'use strict';

function countSteps(turtleArr){

  let newArr = turtleArr.filter (item => item[0]>=0 && item[1]>=0 );
  console.log(newArr);
  let stepsArr = turtleArr.map(arr =>Math.abs(arr[0]) + Math.abs(arr[1]));
  console.log(stepsArr);

  stepsArr.forEach(item => console.log(`The turtle took ${item} steps.`));

}

const mvmtArr = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
countSteps(mvmtArr);