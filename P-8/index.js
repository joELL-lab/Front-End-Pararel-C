// let fullName = "Vincent";
// let age = 30;
// let city = "New York";

// //Hallo, mein Name ist Vincent. Ich bin 30 Jahre alt und komme aus New York.
// //i live in New York and I am 30 years old. My name is Vincent.

// let kalimat = "Hallo, mein Name ist " + fullName + ". Ich bin " + age + " Jahre alt und komme aus " + city + ".";

// let kalimat2 = `Hallo, mein Name ist ${fullName}. Ich bin ${age} Jahre alt und komme aus ${city}.`;
// console.log(kalimat2);

// //Arrow Function
// function sayGreatThings(fullName) {
//     return `Hallo, mein Name ist ${fullName}.`;
// }
// console.log(sayGreatThings("Vincent"));

// let sayGreatThings2 = (fullName) => `Hallo, mein Name ist ${fullName}.`;
// console.log(sayGreatThings2("Vincent"));

// //kalau mau return object
// const sayGreatThings3 = (fullName) => ({ name: fullName });
// console.log(sayGreatThings3("Mi amore"));

// //Destructuring
// const { name } = sayGreatThings3("Mi amore");
// console.log(name);  //Mi amore

// const person = {
//     name: "Mi amore",
//     age: 25,
//     city: "Paris"
// };
// const { name: personName, age: personAge, city: personCity } = person;
// console.log(personName); //Mi amore
// console.log(personAge); //25
// console.log(personCity); //Paris

// //Deafault Parameter
// const sayGreatThings = (fullName, age, addres) => {
//     if (fullName === undefined) {
//         fullName = "Vincent";
//     }
//     if (age === undefined) {
//         age = 30;
//     }
//     if (addres === undefined) {
//         addres = "New York";
//     }
//     return `Hallo, mein Name ist ${fullName}. Ich bin ${age} Jahre alt und komme aus ${addres}.`;
// }
// console.log(sayGreatThings());

let countries = ["Afganistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic (CAR)", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the the", "Congo, Republic of the the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau"," Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (UAE)", "United Kingdom (UK)", "United States of America (USA)", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i]);
// }