
// Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
// Split argument into arrays
 s1 = s1.split('');
 s2 = s2.split('');
 s1Object = {};
 s2Object = {};
 let total = 0;

 // Loop thru array and set object keys and properties
function objectProperty(arr, obj) {
  for(let i = 0; i < arr.length; i++) {
    if(obj.hasOwnProperty(arr[i]) === false) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
 }
 
 objectProperty(s1,s1Object);
 objectProperty(s2,s2Object);

 // Loop thru object and compare each prop
 // if both objects contain the same prop
 // Add the least value of the two props to total
 for(let prop in s1Object){
   if(s2Object.hasOwnProperty(prop) === true) {
     if(s2Object[prop] < s1Object[prop]) {
       total += s2Object[prop];
     } else {
       total += s1Object[prop];
     }
   }
 }

 return total;

}

console.log(commonCharacterCount('aabcc', 'adcaa'));