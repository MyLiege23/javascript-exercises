const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
	let sum = 0;
  for (let a = 0; a < arr.length; a++) {
    sum += arr[a];
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for (let a = 0; a < arr.length; a++) {
    product *= arr[a];
  }
  return product;
};

const power = function(n, exponent) {
  let product = n;
  for (let e = 2; e <= exponent; e++) {
    product *= n;
  }
  return product;
};

const factorial = function(n) {
	let product = 1;
  for (f = n; n > 0; n--) {
    product *= n; 
  }
  return product;
}
console.log(add(2, 3))
console.log(subtract(4, 1))
console.log(sum([5, 4, 6]))
console.log(multiply([5, 2, 1, 3]))
console.log(power(2, 4))
console.log(factorial(4))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
