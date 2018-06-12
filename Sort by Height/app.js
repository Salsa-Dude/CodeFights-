
function sortByHeight(a) {
  //  Copy array
  let copyArr = a;

  // Filter copyArr with no -1
  copyArr = copyArr.filter(function(number) {
    if(number !== -1) {
      return number;
    }
  })
  .sort(function(a,b) {
    return a - b;
  });

  // Index counter
  let indexTracker = 0;

  // Loop thru orginial array
  // Set the copyArr values into original array
  // increment indexTracker each loop
  for(let i = 0; i < a.length; i++) {
    if(a[i] !== -1) {
      a[i] = copyArr[indexTracker];
      indexTracker++;
    }
  }

  return a;

}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))