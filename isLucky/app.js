
function isLucky(n) {
  // Turn n to string and split
  n = n.toString().split('');
  const half = n.length / 2;
  const firstWord = n.splice(0,half);

  const arr1 = []
  const arr2 = []

  // Loop thru array and push string item to placeHolder arrays
  function loopArr(arr,placeHolder) {
    arr.forEach(function(string) {
      placeHolder.push(parseInt(string))
    });
  }

  loopArr(firstWord,arr1);
  loopArr(n,arr2);

  // Add all numbers in array
  const a = arr1.reduce(function(a,b) {
    return a + b;
  })
  const b = arr2.reduce(function(a,b) {
    return a + b;
  })

  if(a === b) {
    return true;
  }

  return false;
}

console.log(isLucky(1230))