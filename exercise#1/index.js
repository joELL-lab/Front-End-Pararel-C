// Exercise 1

// 1. IIFE (Immediately Invoked Function Expression) dengan parameter & return value
let kategoriIIFE = (function (berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi > 25 ? "Kelebihan berat badan" : "Berat badan normal";
})(90, 1.77);

console.log(kategoriIIFE);


// 2. Callback Function dengan parameter & return value
function calculateBMI(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi);
    return callback(bmi);
}

let kategoriCallback = calculateBMI(90, 1.77, function (bmi) {
    return bmi > 25 ? "Kelebihan berat badan" : "Berat badan normal";
});

console.log(kategoriCallback);
