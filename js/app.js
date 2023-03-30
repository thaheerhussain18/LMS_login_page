var form = document.getElementById("login-form");
var emailInput = document.getElementById("username");
var passwordInput = document.getElementById("password");

form.addEventListener("submit", function() {
  event.preventDefault();
  var emailValue = emailInput.value.trim();
  var passwordValue = passwordInput.value.trim();
  

  var map ={"admin@example.com":"admin","admin1@example.com":"thaheer","thaheer@example.com":"admin1"};
  if (emailValue === "" || passwordValue === "") {
    alert("Please fill in all fields.");
  } else if (map[emailValue] == passwordValue) {
    window.location.href="sucess.html";
  } else {
    alert("Invalid Email/Password !");
    form.reset();
  }
});
