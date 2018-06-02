
function matrixElementsSum(matrix) {
  let total = 0;
  const bannedIndexList = [];
  
  // Loop thru Matrix
  // i = number of rows
  // j = number of columns
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      let element = matrix[i][j];
      if(element === 0) {
        bannedIndexList.push(j);
      }
      // if element isn't on the bannedIndexList
      else if(!bannedIndexList.includes(j)) {
        total += element;
      }
    }
  }

  return total;
}


console.log(matrixElementsSum([[0,1,1,2], 
                              [0,5,0,0], 
                              [2,0,3,3]]));