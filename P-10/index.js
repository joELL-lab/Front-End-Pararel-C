//Destructing Module
//1.Destructing
// let numbers = [1, 2, 3, 4, 5];

    // let person = [1, 2, 3, 4, 5];
    // let num1 = numbers[0];
    // let num2 = numbers[1];
    // let num3 = numbers[2];
    // let num4 = numbers[3];
    // let num5 = numbers[4];
//Destructuring Array ES6

// const [num1, num2, num3, num4, num5] = numbers;
// console.log(num1, num2, num3, num4, num5);

//Destructuring  dengan Rest Parameter
// const [num1, num2, ...rest] = numbers;
// console.log(num1, num2);
// console.log(rest);

// //Destructuring Object
// const student = {
//     name: "Gerry",
//     age: 20,
//     isActive: true
// };

// const {name, age, isActive} = student;

// //Destructuring As item
// const {name: studentName, age: studentAge, isActive: studentIsActive} = student;

// console.log(name, age, isActive);
// console.log(studentName, studentAge, studentIsActive);

// //Destructuring Function
// function calculateAge(birthYear){
// 	return 2019 - birthYear;
// }

// function yearUntilRetirement(object){
// 	var age = calculateAge(object.year);
// 	var retirement = 60 - age;

// 	if(retirement > 0){
//     	console.log(object.firstName + ' retires in '+ retirement + ' years');
// 	} else {
//     	console.log(object.firstName + ' is already retired.');
// 	}
// }

// yearUntilRetirement({year: 1987, firstName: 'John'});

//const s
import {student, numbers} from './data.js';

console.log(student);
console.log(numbers);