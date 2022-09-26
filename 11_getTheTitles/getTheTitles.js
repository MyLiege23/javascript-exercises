const getTheTitles = function(arr) {
  let titles = [];
  for (let b = 0; b < arr.length; b++) {
    titles.push(arr[b]["title"]);
  }
  return titles;
};

console.log(getTheTitles([
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]))

// Do not edit below this line
module.exports = getTheTitles;
