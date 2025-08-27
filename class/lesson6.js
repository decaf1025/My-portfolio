//  getElementsByClassName
let fruits = document.getElementsByClassName("fruits");
console.log(fruits);

//  getElementsByTagName
let paras = document.getElementsByTagName("p");
console.log(paras);

//  querySelector
let firstItem = document.querySelector(".my-text");
console.log(firstItem);

//  querySelectorAll
let allItems = document.querySelectorAll(".my-text");
console.log(allItems);

document.querySelector(".my-text").style.color = "red";

document
  .querySelectorAll(".my-text")
  .forEach((el) => (el.style.color = "green"));

document.querySelectorAll(".my-text")[1].style.color = "orange";

const change = () => {
  document.getElementById("demo").innerHTML = "<b>Python</b>";
};

const change2 = () => {
  document
    .getElementById("img")
    .setAttribute(
      "src",
      "/Assets/MX442.jpg"
    );
};


