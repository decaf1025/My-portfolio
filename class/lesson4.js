// var x = 5;
// var y = 10;
// var z = x + y;
// console.log(z);

// x=9;
// console.log("The value of x is now: " + x);

// function add(x, y, z) {
//     const sum = x + y + z;
//     console.log("The sum is: " + sum);
// }

// // let age = 25
// // age = 26 //OK

// const pi = 3.142

// pi = 3.143

// let name = "Nonso"; //string
// let age = 3000; //Number
// let isStudent = true; //Boolean
// let skills = ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT", 34, false] //Array

{
  var skill = "JavaScript";
  let name = "favor";
  const age = 15;
  console.log(name);
}

console.log(skill);

{
  var fav = "icecream";
}

console.log(fav);

function greet() {
  let message = "Hello";
  var name = "Chizzy";
  const age = 9;
  console.log(name.toUpperCase());
}
greet();

//Operators in JavaScript
// +
// -
// /
// *
// =
//!=
//isTrue = true;
//isFalse = false;

// let isEqual = 5 == "5";
// let isStrictEqual = 5 === "5";
// let isNotEqual = 5 < 6;

// console.log(isEqual);
// console.log(isStrictEqual);
// console.log(isNotEqual);

let favFood = "Pounded Yam";
console.log(favFood.toUpperCase() + " " + "length:", favFood.length);

let name = "Trust Williams";
let age = 30;
let hobby = "Gaming, coding, watching movies";
let Skills = ["HTML", "CSS", "javaScript"];
let isStudent = false;

let nameInCaps = name.toUpperCase();
let hobbyLength = hobby.length;

let birthYear = 2025 - age;
let SkillScore = Skills.length * 10;



console.log(isStudent);

let greeting = `My name is ${nameInCaps}, My Birth year is ${birthYear}. I am ${age} years old. I love 
${hobby}. My Skills include ${Skills}. This is my skill score ${SkillScore}. Am I a Student? ${
  isStudent ? "Yes" : "No"
}`;

console.log(greeting);

document.getElementById("message").innerHTML = `My name is ${nameInCaps}, My Birth year is ${birthYear}. I am ${age} years old. I love 
${hobby}. My Skills include ${Skills}. This is my skill score ${SkillScore}. Am I a Student? ${isStudent ? "Yes" : "No"}`;
