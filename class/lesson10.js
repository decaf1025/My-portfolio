//WHILE LOOP

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// do {

// } while(condition);

// FOR LOOP

// for (i=1; i <= 20; i++) {
//     console.log("count", i);
// }

for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("count", i);
  }
}
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }

//for in - looping through array
const fruits = ["apple", "banana", "orange", "mango"];
for (const fruit of fruits) {
    console.log("My favorite fruit is", fruit);
}

//for in - looping through objects
let person = {name: "John", age: 30, job: "Software Engineer"};

for (const key in person) {
    console.log(key + "", person[key]);
}

//nested loops/multiplication table
for (let row = 1; row <= 5; row++) {
    let line = "";
    for (let col = 1; col <= 5; col++) {
        line += (row * col) + "/";
    }
    console.log(line);
}

for (x = 1; x <= 10; x++) {
  if (x === 5) {
    console.log("we found 5. Stop the loop!");
    break;
  }
  if (x % 2 === 0) {
    console.log("it's even, skip the rest of this round!");
    continue;
  }
  console.log("It is odd and processed");
};

for (z = 1; z <= 100; z++) {
    console.log(z);
}