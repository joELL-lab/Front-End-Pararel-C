// ====================
// Array Exercises
// ====================

let people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a for-loop, iterate through this array and console.log all of the people.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Using a forEach(), iterate through this array and console.log all of the people.
people.forEach(person => console.log(person));

// 3. Remove "Greg" from the array.
if (people[0] === "Greg") {
  people.shift();
}

// 4. Remove "James" from the array.
if (people[people.length - 1] === "James") {
  people.pop();
}

// 5. Add "Matt" to the front of the array.
people.unshift("Matt");

// 6. Add your name to the end of the array.
people.push("Gerry"); // ganti "Gerry" dengan nama kamu

// 7. Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

// 8. Make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let copy = people.filter(person => person !== "Mary" && person !== "Matt");
console.log(copy);

// 9. Redefine the people variable with the value you started with.
people = ["Greg", "Mary", "Devon", "James"];
// Using splice to remove "Devon" and add "Elizabeth" and "Artie".
people.splice(2, 1, "Elizabeth", "Artie");
// Add "Matt" to the front and your name at the end
people.unshift("Matt");
people.push("Gerry"); // ganti dengan nama kamu
console.log(people);

// 10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people.concat("Bob");
console.log(withBob);


// ====================
// Object Exercises
// ====================

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Add the language "Go" to the end of the languages array.
programming.languages.push("Go");

// 2. By using bracket notation, change the difficulty to the value of 7.
programming["difficulty"] = 7;

// 3. Using the delete keyword, remove the jokes key from the programming object.
delete programming.jokes;

// 4. By using dot notation, add a new key called isFun and a value of true.
programming.isFun = true;

// 5. Using map(), iterate through the languages array and update each element to be "0 - JavaScript, 1 - Python, …".
let updatedLanguages = programming.languages.map((lang, index) => `${index} - ${lang}`);
console.log(updatedLanguages);
console.log(programming);