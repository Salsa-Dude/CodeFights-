
// Given the string, check if it is a palindrome.
function checkPalindrome(inputString) {
  const reverse = inputString.split('').reverse().join('');
  
  if(inputString === reverse) {
      return true;
  }
  
  return false;
}

console.log(checkPalindrome('abacaba'));