function foldArray(array, runs) {
  //return the array as is if only one digit long
  if (runs <= 0) {
    return array;
  }

  const length = array.length;
  const mid = Math.floor(length / 2);
  const foldedArray = [];

  for (let i = 0; i < mid; i++) {
    foldedArray.push(array[i] + array[length - 1 - i]);
  }

  if (length % 2 === 1) {
    foldedArray.push(array[mid]);
  }

  return foldArray(foldedArray, runs - 1);
  
  }