'use strict';
function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter++;

    console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter === 1){
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
  };
}

const rocksWarning = hazardWarningCreator("Rocks on the Road");
const floodWarning = hazardWarningCreator("There is flood");
const hurricaneWarning = hazardWarningCreator("Dangerous hurricane");

rocksWarning("san francisco");
rocksWarning("new york");
floodWarning("florida");
hurricaneWarning("ohio");