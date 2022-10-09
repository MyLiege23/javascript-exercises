const caesar = function (str, n) {
  /*
    function that changes a letter passed to it over by n letters
    important functions:
    
    str.charCodeAt(index);
    fromCharCode(num1, num2, num3...);
   
    first will grab a character's character code and return a number
    second will return a string from the set of charCodes. This can't be passed an array to print unfortunately

    Conditions to consider:
    if the character in question is a space
    if the character is n away from z/Z (122,90)
    if the character is only a letter (only should change letters) -- lower case: 65-90 uppercase: 97-122
    */
  let encodedStr = "";
  let shiftValue = n;

  if (n > 26 || n < -26) {
    shiftValue = n % 26;
  }

  let shiftLetter = function (letter) {
    let letterCode = letter.charCodeAt();
    let shiftedLetter = "";

    if (
      /*letter is within charset for uppercase*/
      letterCode >= 65 &&
      letterCode <= 90
    ) {
      /*if letter needs to loop to start/end of alphabet*/
      switch (true) {
        case letterCode + shiftValue > 90:
          shiftedLetter = String.fromCharCode(letterCode + shiftValue - 26);
          break;
        case letterCode + shiftValue < 65:
          shiftedLetter = String.fromCharCode(letterCode + shiftValue + 26);
          break;
        default:
          shiftedLetter = String.fromCharCode(letterCode + shiftValue);
          break;
      }
    } else if (
      /*letter is within charset for lowercase*/
      letterCode >= 97 &&
      letterCode <= 122
    ) {
      switch (true) {
        case letterCode + shiftValue > 122:
          shiftedLetter = String.fromCharCode(letterCode + shiftValue - 26);
          break;
        case letterCode + shiftValue < 97:
          shiftedLetter = String.fromCharCode(letterCode + shiftValue + 26);
          break;
        default:
          shiftedLetter = String.fromCharCode(letterCode + shiftValue);
          break;
      }
    } else {
      return letter;
    }
    return shiftedLetter;
  };

  for (i = 0; i < str.length; i++) {
    encodedStr += shiftLetter(str[i]);
  }

  return encodedStr;
};

// Do not edit below this line
module.exports = caesar;
