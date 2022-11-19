"use strict";

function logger() {
  console.log("My name is Pon Jagannath");
}

logger();

function fruitProcessor(apple, orange) {
  console.log(apple, orange);
  const juice = `Juice with ${apple} apples and ${orange} oranges`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 7));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

console.log(calcAge(2022));

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearTillRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearTillRetirement(2022, `Jagan`));

const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor2 = function (apple, orange) {
  const applePieces = cutPieces(apple);
  const orangePieces = cutPieces(orange);

  return `juice with ${applePieces} of apple and ${orangePieces} of orange`;
};

console.log(fruitProcessor2(2, 4));

// Arrays

const friends = ["friend1", "friend2", "friend3"];
console.log(friends);

const years = new Array(1991, 1992, 1993);
console.log(years);

console.log(friends[0]);
console.log(friends.length);

friends[2] = "new friend";

const ponjagannath = ["PonJagannath", "Thangaswami", 2022 - 1984];
console.log(ponjagannath);
