const reverseString = function(str) {
  let backwardsArr = [];
  let backwardsStr = "";
  for (let l = (str.length - 1); l >= 0; l--) {
    backwardsArr.push(str[l]);
  }
  while (backwardsArr.length !== 0) {
    backwardsStr += backwardsArr.shift();
  }
  return backwardsStr
};

// Do not edit below this line
module.exports = reverseString;
