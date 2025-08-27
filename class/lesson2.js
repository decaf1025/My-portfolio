// let userName = prompt('What is your username?');
// let message = "Nice to meet you " + userName;
// alert(message);

// alert('How are you')

// document.write('This is sent to the page');

// let user = prompt("What is Your Favorite Color?")
// document.write("<h2> My favorite color is " + user + "!</h2> ")

// let name = prompt("What is your name?");
// let age = prompt("What is your age?");
// let hobby = prompt("What is your hobby?");

// alert("Hello " + name + " Welcome to our webpage.");
// document.write("<h2> Hello " + name + "! You are " + age + " years old and you enjoy " + hobby + ".</h2>");
// document.write("<p>Thank you for sharing!</p>");

// let myName = prompt("What is your name?");
// let myuser1Age = prompt("What is your age?");
// let user2Age = prompt("What is your sister's age?");

// user2Age = parseInt(user2Age);
// myuser1Age = parseInt(myuser1Age);

// alert("You and your sister are " + (myuser1Age + user2Age) + " years old.");



let customerName = prompt("Hello, What is your name?")
let flavor = prompt("What flavor do you wnat? E.g vanilla, Strawberry e.t.c.")
let scoops = prompt("How many scoops of ice cream do you want?");
scoops = parseInt(scoops);

const pricePerScoop = 200;
const totalPrice = pricePerScoop * scoops;

document.write("<h2> Thanks " + customerName + "! Your " + scoops + " scoops of " + flavor + " ice-cream in your cup will cost #" + totalPrice + ".</h2>" )
