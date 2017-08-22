function max(numbers) {

  let i = 0;
  let maxN = -Infinity;

  if (numbers.length === 0){
    return null;
  }

  while (i<numbers.length){
    if(numbers[i] > maxN){
      maxN = numbers[i];
    }
    i++;
  }
  return maxN;
}
 
 
 function min(numbers) {
  let i = 0;
  let minN = Infinity;

  if (numbers.length === 0){
    return null;
  }

  while (i<numbers.length){
    if(numbers[i] < minN){
      minN = numbers[i];
    }
    i++;
  }
  return minN;
 }
 
 console.log(min([]));
 