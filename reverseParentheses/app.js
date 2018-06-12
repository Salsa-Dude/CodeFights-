
//Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. 
//The results string should not contain any parentheses.

function reverseParentheses(s) {
  // run function until there is no parentheses
  if(s.includes('(')) {
    return reverseParentheses(reverseString(s));
  }
  return s;
}

function reverseString(s) {
  // Regex that captures value between parentheses
  const regExp = /\(([^()]*)\)/i;
  let subString = regExp.exec(s)[1];
  // Reverse string
  subString = subString.split('').reverse().join('');
  // Replace orginal value with new formatted string
  return s.replace(regExp,subString);
}

console.log(reverseParentheses("a(bcdefghijkl(mno)p)q"));