let age = document.getElementById("age");
let check = document.getElementById("check");
let result = document.getElementById("result");

check.addEventListener("click", () => {
  if (age.value === "") {
    result.textContent = "⚠ Please enter a valid age";
  }
  else if (isNaN(age.value)) {
    result.textContent = "⚠ Age must be a number";
  }
  else {
    if (age.value < 18) {
    result.textContent = "You are not an adult yet";
  }
  else {
    result.textContent = "You are an adult";
  }
  }
});
