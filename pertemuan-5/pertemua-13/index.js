//Rest Parameter & Spread Operator

//1. Rest Parameter

//tanpa rest parameter
const func1 = (param1, param2, param3) => {
    console.log(param1, param2, param3);
}
func1("A", "B", "C");

//dengan rest pamarameter
const func2 = (...params) => {
    console.log(params);
};

func2("A", "B", "C", "D", "E");

const func3 = (param1, param2, ... params) => {
    console.log(param1, param2);
    console.log(params);
};

func2("A", "B", "C", "D", "E")

//Mini Exercise
//Ubah dengan mengunakan rest parameter
const penjumlahan = (...arr) => {
    let hasil = 0;
    arr.forEach ((item) => (hasil += item));
    return hasil;
};

console.log(penjumlahan(1,2,3,4,5));

//2. Spread Operators
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//1. saat duplikasi array
let numbers2 = [... numbers];
console.log(numbers2);

//2. Menggabungkan array
let arra2 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = [7, 8, 9];

let numbers3 = array1.concat(array2)