let rep = 1;
while (rep <= 10) {
  console.log(`whileloop iteration ${rep}`);
  rep = rep + 1;
}

console.log("-----dice rolling-----");
console.log("----roll until you get 6-------");
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice != 6) {
  console.log(`you rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

console.log(`you rolled ${dice}`);
