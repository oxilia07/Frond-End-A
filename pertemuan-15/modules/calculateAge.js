// calculateAge.js
const calculateAge = (birthYear) => 2019 - birthYear;

export const yearUntilRetirement = (object) => {
  let age = calculateAge(object.year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${object.firstName} retires in ${retirement} years`);
  } else {
    console.log(`${object.firstName} is already retired.`);
  }
};
