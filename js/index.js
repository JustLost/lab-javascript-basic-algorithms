// Iteration 1: Names and Input
let hacker1 = "Francisco";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Rita";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Woah, you both have equally long names, ${hacker1.length} characters`
  );
}
// Iteration 3: Loops
let newString = "";
for (let i = 0; i < hacker1.length; i++) {
  newString += hacker1.charAt(i) + " ";
}

console.log(newString.toUpperCase());

let newHacker2 = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
  newHacker2 += hacker2[j];
 }

console.log(newHacker2);

if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definetly.");
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What? You have the same name?");
}
