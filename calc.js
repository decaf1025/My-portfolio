const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      display.value += value;
    } else if (button.id === "backSpace") {
      display.value = display.value.slice(0, -1);
    } else if (button.id === "clearBtn") {
      display.value = "";
    } else if (button.id === "equalTo") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }
  });
});

// document.getElementById("equalTo").addEventListener("click", function () {
//   const num1 = parseInt(document.getElementsByTagName("button").value);
//   const num2 = parseInt(document.getElementsByTagName("button").value);
//   const operator = document.getElementById("operator").value;

//   if (operator === "+") {
//     display.value = num1 + num2;
//   } else if (operator === "-") {
//     display.value = num1 - num2;
//   } else if (operator === "*") {
//     display.value = num1 * num2;
//   } else if (operator === "/") {
//     display.value = num1 / num;
//   }

//   document.getElementById("display").textContent = display.value;
// });
