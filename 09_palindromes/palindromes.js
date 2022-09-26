const palindromes = function (expression) {
  //make expression into string of letters w/o extra characters
  let palindromeBefore = ""
    for (let l = 0; l < expression.length; l++) {
      if ((/[a-zA-Z]/).test(expression[l])) {
        palindromeBefore += expression[l];
      }  
    }
  //then reverse the string to a new string
  let palindromeAfter = "";
  for (l = palindromeBefore.length - 1; l >= 0; l--) {
    palindromeAfter += palindromeBefore[l];
  }
  //make comparison case independant
  console.log(palindromeBefore.toLowerCase() == palindromeAfter.toLowerCase());
  return palindromeBefore.toLowerCase() == palindromeAfter.toLowerCase();
};
// Do not edit below this line
module.exports = palindromes;
