
// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
  const lengthOfWall = picture[0].length + 2;
  let wall = "";

  // form wall of asterisks
  for(let i = 0; i < lengthOfWall; i++) {
    wall = wall.concat('*');
  }
  
  // Add asterisks on front and behind of picture value
  picture.unshift(wall);
  picture.push(wall);

  for(let j = 1; j < picture.length -1; j++) {
    picture[j] = '*'.concat(picture[j], '*');
  }

  return picture;
}

console.log(addBorder(["abc", "ded"]));