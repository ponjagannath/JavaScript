# Strict mode

```js
"use strict";
```

# Functions

```js
function logger() {
  console.log("My name is Pon Jagannath");
}

logger();
```

## Functions with parameters and return value

```js
logger();

function fruitProcessor(apple, orange) {
  console.log(apple, orange);
  const juice = `Juice with ${apple} apples and ${orange} oranges`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 7));
```

## Ananimous function

```js
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

console.log(calcAge(2022));
```

## Arrow function

```js
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
```

## Multi liner arrow function

```js
const yearTillRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
```

## Multiple parameters in an arrow function

```js
const yearTillRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearTillRetirement(2022, `Jagan`));
```

## Calling a function from another function

```js
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor2 = function (apple, orange) {
  const applePieces = cutPieces(apple);
  const orangePieces = cutPieces(orange);

  return `juice with ${applePieces} of apple and ${orangePieces} of orange`;
};

console.log(fruitProcessor2(2, 4));
```

# Array

```js
const friends = ["friend1", "friend2", "friend3"];
console.log(friends);

const years = new Array(1991, 1992, 1993);
console.log(years);

console.log(friends[0]);
console.log(friends.length);

friends[2] = "new friend";

const ponjagannath = ["PonJagannath", "Thangaswami", 2022 - 1984];
console.log(ponjagannath);
```

## Array Add, remove, indesOf, includes

```js
// Add elements to the end of the array
friends.push("Jay");

console.log(friends);

// Add elements to the start of the array
friends.unshift("First Name");
console.log(friends);

// Remove relements

const popped = friends.pop();
console.log(popped);
console.log(friends);

// Remove first elements from the array
friends.shift();
console.log(friends);

console.log(friends.indexOf("friend1"));

// Check if the element is present in the array

console.log(friends.includes("friend1"));
```

# Objects

```js
const jones = {
  firstName: "Pon Jagannath",
  lastName: "Thangaswami",
  age: 2037 - 1991,
  job: "Student",
  friends: ["Aadhitya", "Kavitha"],
};
```
