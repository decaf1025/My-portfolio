
// Array Methods
let fruits = ["Apple", "Banana", "Orange", "Mango"];
updateFruitList();

function showDateTime () {
    let now = new Date();
   document.getElementById("dateTime").innerHTML = `Year: ${now.getFullYear()} <br>
    Month: ${now.getMonth()} <br>
     Day: ${now.getDate()}<br>
    time: ${now.toLocaleTimeString()}`;

}

function updateFruitList() {
    let list = document.getElementById("fruitList");
    list.innerHTML = "";
    fruits.forEach(fruit => {
        let item = document.createElement("li");
        item.innerText = fruit;
        list.appendChild(item);
    });
}

function addFruit() {
    fruits.push("Mango");
    updateFruitList();
}

function removeFruit() {
    fruits.pop();
    updateFruitList();
}

function addToStart () {
    fruits.unshift("Mango");
    updateFruitList();
}

function removeFromStart () {
    fruits.shift();
    updateFruitList();
}

function toUpper() {
    let text =  document.getElementById("stringExample").textContent;
    document.getElementById("stringExample").textContent = text.toUpperCase();
}

function toLower() {
    let text =  document.getElementById("stringExample").textContent;
    document.getElementById("stringExample").textContent = text.toLowerCase();
}

function checkIncludes() {
    let text =  document.getElementById("stringExample").textContent;
    alert(text.includes("interesting") ? "It includes the word 'interesting'" : "It does not include the word 'interesting'");
}

function randomNum() {
    let randomNumber = Math.floor(Math.random() * 10);
   document.getElementById("mathResult").textContent = randomNumber;
   "randomNumber: " + (Math.floor(Math.random() * 100) + 1);
}

function randomNum() { 
   document.getElementById("mathResult").innerHTML = 
   `Math.round(3.6): ${Math.round(3.6)}
   `
   
}

function mathCeil () {
    document.getElementById("mathResult").innerHTML = 
    `Math.ceil(7.6): ${Math.ceil(7.6)}`

}

function showPi() {
    document.getElementById("mathResult").innerHTML = 
    `Math.PI: ${Math.PI}`

}





// console.log(fruits.length);
// console.log(fruits[2]);

// console.log(fruits.indexOf("Banana", 1));

// fruits.push("Mango"); //adds an item to the end
// fruits.unshift("Pineapple"); //adds an item to the beginning
// fruits.shift(); //removes an item from the beginning
// console.log(fruits); //["Pineapple", "Apple", "Banana", "Orange", "Mango"]
// fruits.splice(1, 0, "Pear"); //removes an item from a specific index
// //fruits.splice(start at index, remove count, item to add)
// console.log(fruits);

// //String Methods

// let text = "Hello World";
// console.log(text.toUpperCase()); //HELLO WORLD

// console.log(text.toLowerCase()); //hello world

// let text2 = "javaScript is interesting"
// console.log(text2.includes("boy")); //false
// console.log(text2.startsWith("java"));//true
// console.log(text2.endsWith("est")); //false
// console.log(text2.indexOf("is", 5)); //11

// // function addText () {
// //     document.getElementById("list").append("Pear");
// // } 




// function addText () {
//     document.getElementById("list").innerHTML += "<li>Pear</li>";
// }// Add to the list: <li>Pear</li>

// let year = new Date().getFullYear() - 1999; //  2025 - 1999 = 26
// console.log(year);

// let month = new Date().getMonth() + 1;// get the current Month = 8
// console.log(month);

// let time = new Date().toLocaleTimeString(); // get the current local time
// console.log(time);

// let randomNum = Math.floor(Math.random() * 100); // generate random numbers from 0-100
// console.log(randomNum);

// console.log(Math.PI); // print the value of PI to the console
// console.log(Math.round(3.6))//  round up to the nearest integer

// console.log(Math.floor(3.9));





