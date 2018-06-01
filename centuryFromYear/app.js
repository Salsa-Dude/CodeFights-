
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
  
  var century = year / 100;
   // find out if the year is evenly divisible
  if(year % 100 == 0) {
       return century
   }
  // If year has a remainder
  return Math.floor(century) + 1;
}

console.log(centuryFromYear(2001) + ' century');