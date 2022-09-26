const fibonacci = function(n) {
  if (n < 1) {
    return "OOPS"
  }
  let fibRecentTwo = [0, 1];
  for (l = 1; l < n; l++) {
    let sum = fibRecentTwo[0] + fibRecentTwo[1];
    fibRecentTwo.shift();
    fibRecentTwo.push(sum);
  }
  return fibRecentTwo[1];
};

// Do not edit below this line
module.exports = fibonacci;
