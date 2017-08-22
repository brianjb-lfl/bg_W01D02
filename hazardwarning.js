'use strict';
function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter++;
    console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);

  };
}

const rocksWarning = hazardWarningCreator("Rocks on the Road");
const floodWarning = hazardWarningCreator("There is flood");
const hurricaneWarning = hazardWarningCreator("Dangerous hurricane");

rocksWarning("san francisco");
floodWarning("florida");
hurricaneWarning("ohio");