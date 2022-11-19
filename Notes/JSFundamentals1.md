# Developer tools in Chrome

### To open developer tools in google chrome

- cntl + shift + j
- inspect element -> console

# Hello world

```js
alert("Hello world");
```

# JS in HTML script

```html
<script>
  alert("Hello World");
  console.log("Hello World Console");
</script>
```

```html
<script src="script.js"></script>
```

# Values and Variables

```js
let firstName = "PonJagannath";
console.log(firstName);
```

# DataTypes

### 7 Primitive Datatypes

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

### JS is a dynamically types language

```js
let firstName = "PonJagannath";
console.log(firstName);
console.log(typeof firstName);
```

# Let, Const, var

### values in const cant be changed

### var is leagacy, so avoid it

# Basic operators

```js
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
```

# Operator presedence

# String and Template literals

```js
const string1 = `I'm ${firstName},a ${2022 - birthYear} years old ${job}`;
```

### Multi line string

```js
console.log(`multi
line string`);
```

# if else logic

```js
if (isOldEnough) {
  console.log("Sarah can start driving :)");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}
```

# Type conversion and Coercion

```js
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
```

# Truthy and Falsy values

### 5 falsy values: 0,'',undefined,null, NaN

```js
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
```

# Equality Operator: == vs ===

### === will not do type Coercion

### == will allow type coercion

```js
const age2 = 18;
if (age2 === 18) console.log("You are a adult: Stringh");

if (age2 == 18) console.log("You are a adult: Loose");

const age3 = 18;
if (age3 === 18) console.log("You are a adult: Stringh");

if (age3 == 18) console.log("You are a adult: Loose");

const favNum = Number(prompt("Whats your favorite number ?"));
console.log(favNum);
console.log(typeof favNum);

if (favNum === 23) console.log("23 is a cool number");
else if (favNum === 7) console.log("7 is also a cool number");
else if (favNum === 9) console.log("9 is also a cool number");
else console.log("number is neither 23, 7, 9");

if (favNum != 23) console.log("why not 23?");
```

# Logical Operators

```js
const hasDriverLicence = true;
const hasGoodVision = true;
const isTired = false;

const shouldDrive = hasDriverLicence && hasGoodVision && !isTired;
if (shouldDrive) console.log("Sarah can drive");
else console.log("some one else should drive");
```

# Switch statement

```js
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
```

# The conditional operator

```js
const age3 = 23;

age3 >= 18
  ? console.log("You can drink wine")
  : console.log("You cant drink wine");

const drink = age3 >= 18 ? "wine" : "water";

console.log(drink);
```
