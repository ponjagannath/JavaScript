for (let rep = 1; rep <= 10; rep = rep + 1) {
  console.log(`repeation ${rep}`);
}

const myArray = [
  "Ponjagannath",
  "Thangaswami",
  2037 - 1991,
  "programmer",
  ["Capgemini", "IBM", "Accenture"],
];

const type = [];
const type2 = [];

for (let i = 0; i < myArray.length; i = i + 1) {
  console.log(myArray[i]);
  type[i] = typeof myArray[i];

  //push command will insert a element at the end of the array
  type2.push(typeof myArray);
}

console.log(type);
console.log("type2: ");
console.log(type2);

// continue and break

console.log("----------Continue----------");
for (let i = 0; i < myArray.length; i = i + 1) {
  if (typeof myArray[i] !== "string") continue;
  console.log(myArray[i], typeof myArray[i]);
}

console.log("----------Break----------");
for (let i = 0; i < myArray.length; i = i + 1) {
  if (typeof myArray[i] === "number") break;
  console.log(myArray[i], typeof myArray[i]);
}

console.log("------looping backwards-------");
for (let i = myArray.length - 1; i >= 0; i = i - 1) {
  console.log(myArray[i]);
}

console.log("-------loop inside a loop");
for (let i = 1; i <= 5; i = i + 1) {
  console.log(`outloop iteration ${i}`);
  for (let j = 1; j <= 10; j = j + 1) {
    console.log(`innerloop iteration ${j}`);
  }
}
