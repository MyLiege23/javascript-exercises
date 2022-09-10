const sumAll = function(intStart, intEnd) {
  let sum = 0;
  if (typeof(intStart) !== "number" || typeof(intEnd) !== "number" || intStart < 0 || intEnd < 0) {
    return "ERROR";
  } else if (intStart < intEnd) {
    for (let i = intStart; i <= intEnd; i++) {
      sum += i;
    }
  } else {
    for (let i = intEnd; i<= intStart; i++) {
      sum += i;
    }}
  return sum;
};

console.log(sumAll(10, "90"));

// Do not edit below this line
module.exports = sumAll;
