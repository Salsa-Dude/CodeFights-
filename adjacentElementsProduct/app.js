
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
  let productHolder = inputArray[0] * inputArray[1];
  
  // Loop each adjacent pairs
  for(var i = 0; i < inputArray.length; i++) {
    // if the product of the two pairs is greater than the productHolder
      if(inputArray[i] * inputArray[i + 1] > productHolder) {
          productHolder = inputArray[i] * inputArray[i + 1];
      }
  }
  
  return productHolder;
}

console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]));