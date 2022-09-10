const removeFromArray = function(arr) {
  for (let a = 0; a < arguments.length; a++) {
    console.log(arguments[a]);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arguments[a]) {
        arr.splice(i, 1);
        console.log(arr);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
