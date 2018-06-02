
function almostIncreasingSequence(sequence) {

  var count = 0;
  for(var i = 0; i < sequence.length; i++) {
    // if current index is less than the previous index
   if(sequence[i] <= sequence[i - 1]) {
    count++
    // if current index is less/equal than the previous two index and
    // if the index in front is less/equal than the previous index
    if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
     return false;
    }
   }
  }
  return count <= 1;

  // function isIncreasing(arr) {
  //   for(let j = 0; j < arr.length; j++) {
  //     if(arr[j + 1] <= arr[j]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // for (var i = 0; i < sequence.length; i++) {
  //   // Make a copy of the array without one element
  //   let subsequence = sequence.slice();
  //   subsequence.splice(i,1);

  //   // Check if its increasing if so return true;
  //   if(isIncreasing(subsequence)) return true;
  // }
  
  // // If you don't find one, return false
  // return false;
}

  console.log(almostIncreasingSequence([1, 3, 2, 1]));
