//1. Rest Parameters
const funct1 = (param1, param2, ...rest) => {
    console.log(param1);
    console.log(param2);
    console.log(rest);
}

funct1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//2. Spread Operator
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//Duplikat Array
const numbers2 = [...numbers];
console.log(numbers2);

//Menggabungkan 2 Array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let combineArr = arr1.concat(arr2, arr3);
console.log(combineArr);
let combineArr2 = [...arr1, ...arr2, ...arr3];
console.log(combineArr2);

//1.Duplikat Object
const student = {
    name: 'John',
    age: 20,
    major: 'Computer Science'
};