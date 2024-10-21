// addNumber.js
export const addNumber = (...numbers) => {
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
  };
  