
// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

function shapeArea(n) {
  // set area to 1
  let area = 1;

  // Loop each number to n to find the mutiple of 4
  for(var i = 1; i < n; i++) {
    area += 4 * i
  }

  return area;
}

console.log(shapeArea(3));