
// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

function makeArrayConsecutive2(statues) {
  const min = Math.min(...statues);
  const max = Math.max(...statues);

  let placeHolder = [];

  // Loop each number between min and max
  // If number is not in statues array add it to placeHolder array
  for(let i = min; i < max; i++) {
    if(!statues.includes(i)) {
      placeHolder.push(i);
    }
  }

  return placeHolder.length;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));