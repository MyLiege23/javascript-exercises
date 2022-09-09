const repeatString = function(str, n) {
  let output = "";
  if (n >= 0) {
    for (let i = 0; i < n; i++) {
    output += str;
    }
    return output;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
