const findTheOldest = function(people) {
  //declare constant for the selection of the oldest person
  let oldest = people[0];

  //create a function to use to calculate the age of the person being compared to the oldest
  let findAge = function(person) {
    age = 0;
    if (person.hasOwnProperty("yearOfDeath")) {
      age = person.yearOfDeath - person.yearOfBirth;
    } else {
      age = new Date().getFullYear() - person.yearOfBirth;
    }
    return age;
  }

  //compare person in question to the oldest and reassign oldest value it necessary
  for (let c = 0; c < people.length; c++) {
    if (findAge(people[c]) > findAge(oldest)) {
      oldest = people[c];
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
