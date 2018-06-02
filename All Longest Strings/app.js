
// Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {

  var largestWord = inputArray[0].length;
  
  // Loop thru array and compare each [i].length
  for(var i = 1; i < inputArray.length; i++) {
   if(inputArray[i].length > largestWord) {
     // if [i].length is greater make it to equal to largestWord
    largestWord = inputArray[i].length;
   }
  }
  // if number in array doesn't have the same length, filter it out
  inputArray = inputArray.filter((number) => {
   return number.length === largestWord;
  });
  
  return inputArray;
}

console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"])); // ["eeee", "abcd"]