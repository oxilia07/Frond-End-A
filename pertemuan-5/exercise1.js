// JavaScript Function

// Cara 1. Function Declaration
function hitungBMI(berat, tinggi) {
    return berat / (tinggi * tinggi);
  }
  
  // Memanggil fungsi hitungBMI dengan berat 70 kg dan tinggi 1.7 meter
  let bmi1 = hitungBMI(70, 1.7);
  console.log("BMI (Function Declaration): " + bmi1.toFixed(2));
  
  // Cara 2. Function Expression
  let hitungBMI2 = function (berat, tinggi) {
    return berat / (tinggi * tinggi);
  };
  
  // Memanggil fungsi hitungBMI2 dengan berat 70 kg dan tinggi 1.7 meter
  let bmi2 = hitungBMI2(70, 1.7);
  console.log("BMI (Function Expression): " + bmi2.toFixed(2));
  
  // Function Hoisting
  // Cara 1. Function Declaration
  let bmi3 = hitungBMI(70, 1.7);
  console.log("BMI (Function Declaration with Hoisting): " + bmi3.toFixed(2));
  
  // Cara 2. Function Expression (ERROR jika tidak di-declare terlebih dahulu)
  let bmi4 = hitungBMI2(70, 1.7);
  console.log("BMI (Function Expression without Hoisting): " + bmi4.toFixed(2));
  
  // Global Scope & Local Scope
  
  let x = 10; // Global
  
  function foo() {
    let y = 20; // Local Function
    console.log(x); // 10
    console.log(y); // 20
    if (y > x) {
      let z = 30; // Local block
      console.log(z); // 30
    }
    // console.log(z); // ERROR
  }
  
  console.log(x); // 10
  // console.log(y); // ERROR
  
  foo();
  