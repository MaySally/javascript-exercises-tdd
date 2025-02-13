const findTheOldest = function(arr){
    const currentYear = new Date().getFullYear(); 
  
  return arr.reduce((oldest, person) => {
    // Use yearOfDeath or current year if there's no death year
    const deathYear = person.yearOfDeath || currentYear;
    const age = deathYear - person.yearOfBirth;

    // Compare and return the oldest person
    return age > (oldest.yearOfDeath ? (oldest.yearOfDeath - oldest.yearOfBirth) : (currentYear - oldest.yearOfBirth)) 
      ? person 
      : oldest;
  });
}

// Do not edit below this line
module.exports = findTheOldest;
