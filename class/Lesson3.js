function add (x,y,z) {
    return x + y + z;
}

let result = add(5, 3, 8);
console.log("The result of the addition is: " + result);

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Trust Williams");

function sayHello() {
  let name = prompt("What is your name?");
  let greeting = "Hello, " + name + "! Welcome to the JavaScript class.";
  document.getElementById("greeting").style.color = "blue";
  document.getElementById("greeting").innerText = greeting;
}