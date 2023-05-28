const me = {
  firstName: "Pon Jagannath",
  lastName: "Thangaswami",
  birthYear: 1991,
  age: 2037 - 1991,
  job: "Student",
  friends: ["Aadhitya", "Kavitha"],
  hasDriversLicence: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },
};

console.log(me);
console.log(me.firstName);
console.log(me["firstName"]);
// console.log(me.calcAge(1991));
// console.log(me["calcAge"](1991));
console.log(me.calcAge());
