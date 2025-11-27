// Ubahlah syntax ES5 berikut ke dalam ES6

// 1) yearUntilRetirement - gunakan destructuring, const/let, template literals
const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

// 2) addNumber - gunakan rest parameter dan arrow function
const addNumber = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(`Sum: ${addNumber(1, 2, 3, 4, 5, 6, 7)}`);

// 3) calculateArea - gunakan const, default param, dan operator pangkat (**)
const PHI = 3.14;
const calculateArea = ({ radius, power = 2 }) => PHI * (radius ** power);

const area21 = calculateArea({ radius: 21 });
const area7 = calculateArea({ radius: 7 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4) makeAjaxRequest - gunakan default parameter
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
};

makeAjaxRequest('www.google.com');