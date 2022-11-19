// alert("Hello World");
console.log("Hello World Console");

let firstName = "PonJagannath";
console.log(firstName);
console.log(typeof firstName);

const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;

console.log(ageJones * 2, ageJones / 10, 2 ** 3);

const fName = "Jones";
const lName = "Schmedtmann";
console.log(fName + " " + lName);

let x = 10 + 5;
x += 10;
x++;
console.log(x);

console.log(ageJones > ageSarah);

const birthYear = 1984;
const job = "Teacher";

const string1 = `I'm ${firstName},a ${2022 - birthYear} years old ${job}`;

console.log(string1);

console.log(`multi
line string`);

const age = 10;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving :)");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

//type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(String(23));

//type coercion - implicit type conversion
console.log("I am " + 23 + " years old");

console.log("23" + "10" + 3);
console.log("23" - "10" - 3);
console.log("23" * "3");
console.log("23" / "3");

// Falsy value

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jagan"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;

if (money) {
  console.log("Done spent all the money");
} else {
  console.log("You should get a job");
}

let height;

if (height) {
  console.log("Yes height is defined");
} else {
  console.log("No, Height is not yet defined");
}

// const age2 = 18;
// if (age2 === 18) console.log("You are a adult: Stringh");

// if (age2 == 18) console.log("You are a adult: Loose");

// const age3 = 18;
// if (age3 === 18) console.log("You are a adult: Stringh");

// if (age3 == 18) console.log("You are a adult: Loose");

// const favNum = Number(prompt("Whats your favorite number ?"));
// console.log(favNum);
// console.log(typeof favNum);

// if (favNum === 23) console.log("23 is a cool number");
// else if (favNum === 7) console.log("7 is also a cool number");
// else if (favNum === 9) console.log("9 is also a cool number");
// else console.log("number is neither 23, 7, 9");

// if (favNum != 23) console.log("why not 23?");

// const hasDriverLicence = false;
// const hasGoodVision = true;

// console.log(!hasDriverLicence && hasGoodVision);
// console.log(hasDriverLicence || hasGoodVision);

// const shouldDrive = hasDriverLicence && hasGoodVision;

// if (shouldDrive) console.log("Sarah can drive");
// else console.log("some one else should drive");

const hasDriverLicence = true;
const hasGoodVision = true;
const isTired = false;

const shouldDrive = hasDriverLicence && hasGoodVision && !isTired;
if (shouldDrive) console.log("Sarah can drive");
else console.log("some one else should drive");

const day = "tuesday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Its monday");
    console.log("Have a good work week");
    break;
  case "tuesday":
  case "wednesday":
    console.log("Do some coding");
    break;
  case "thursday":
    console.log("Its thursday");
    break;
  case "friday":
    console.log("Its wdenesday");
    break;
  default:
    console.log("Its not a valid date");
}

const age3 = 23;

age3 >= 18
  ? console.log("You can drink wine")
  : console.log("You cant drink wine");

const drink = age3 >= 18 ? "wine" : "water";

console.log(drink);
