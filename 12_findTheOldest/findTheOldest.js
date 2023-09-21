const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.map((person) => ({person:person, age: (person.yearOfDeath || currentYear) - person.yearOfBirth}))
                 .reduce((oldest, person) => {
                    return (oldest.age > person.age) ? oldest : person;
                 }, {age:0}).person;
};

// Do not edit below this line
module.exports = findTheOldest;
