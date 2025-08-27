document.getElementById("email").addEventListener("input", function () {
 

// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   document.getElementById("result").innerHTML =
//     "<b> You have Clicked this Btn </b>";
// });

let email = document.getElementById("email");

// document.getElementById("emailError").textContent = "";
// document.getElementById("emailSuccess").textContent = "";
// document.getElementById("elError").textContent = "";

if (!email.value.includes("@")) {
  document.getElementById("emailError").textContent =
    "Please enter a valid email";
}

else {
  document.getElementById("emailSuccess").textContent = "Email Valid!";
}

if (email.value.length < 8) {
    document.getElementById("elError").textContent =
      "Email must be at least 8 characters";
} 

if(email.value === "") {
    emailError.textContent = "";
}

if(email.value === "") {
    elError.textContent = "";
}
});