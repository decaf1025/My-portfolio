// document.getElementById("btn").addEventListener("click", function() {
//     alert("Hello World!"); 
// });

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
 console.log("first")});

btn.addEventListener("click", () => {
 console.log("second")});
   
 let p = document.getElementById("para");

 p.addEventListener("mouseover", () => {
p.style.color = "red";
 });
p.addEventListener("mouseout", () => {
p.style.color = "black";
});

let name = document.getElementById("name");

name.addEventListener("keypress", (event) => {
  console.log("You typed: " + event.key)});

  



