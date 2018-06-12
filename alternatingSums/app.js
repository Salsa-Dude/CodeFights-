
function alternatingSums(a) {
  let team1 = 0;
  let team2 = 0;
  
  // loop array and add all the even index values to team1
  a.forEach(function(number,index) {
    if(index % 2 === 0) {
      team1 += number;
    } else {
      team2 += number;
    }
  });

  return [team1,team2];

}

console.log(alternatingSums([50, 60, 60, 45, 70]));