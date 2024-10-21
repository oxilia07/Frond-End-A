// 1. Function to calculate age and retirement using ES6

const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = (object) => {
  let age = calculateAge(object.year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${object.firstName} retires in ${retirement} years`);
  } else {
    console.log(`${object.firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });


// 2. Function to add numbers using ES6

const addNumber = (...numbers) => {
  let sum = numbers.reduce((acc, curr) => acc + curr, 0); // Menggunakan reduce untuk menjumlahkan semua angka
  return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


// 3. Function to calculate area using ES6

const phi = 3.14;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


// 4. Function to make an Ajax request using ES6

const makeAjaxRequest = (url, method = 'GET') => {
  console.log(url, method);
};

makeAjaxRequest('www.google.com');
