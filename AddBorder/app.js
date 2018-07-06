
// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
  const lengthOfWall = picture.length[0].length + 2;
  let wall = "";

  for(let i = 0; i < lengthOfWall; i++) {
    wall = wall.concat('*');
  }

  picture.unshift(wall);
  picture.push(wall);

  for(let j = 0; j < picture.length -1; j++) {
    picture[j] = '*'.concat(picture[j], '*');
  }
}

console.log(addBorder(["abc", "ded"]));