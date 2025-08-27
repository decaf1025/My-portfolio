document.getElementById("submitBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission
  
  let userName = document.getElementById("userName").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let cpassWord = document.getElementById("cpassWord").value.trim();

  let valid = true;

  //Reset messages
  document.getElementById("userError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passError").textContent = "";
  document.getElementById("cpassError").textContent = "";
  document.getElementById("successMsg").textContent = "";

  if (userName === "") {
    document.getElementById("userError").textContent = "Please enter your name";
    valid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent =
      "Please enter your email";
    valid = false;
  }

  if (email !== "" && !email.includes("@")) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email";
    valid = false;
  }

  if (password === "") {
    document.getElementById("passError").textContent =
      "Please enter a password";
    valid = false;
  } else if (password.length < 8) {
    document.getElementById("passError").textContent =
      "Password must be at least 8 characters";
    valid = false;
  }

  if (cpassWord === "") {
    document.getElementById("cpassError").textContent =
      "Please confirm your password";
    valid = false;
  } else if (cpassWord !== password) {
    document.getElementById("cpassError").textContent =
      "Passwords do not match";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMsg").textContent = "Signup Successful!";
  }
});