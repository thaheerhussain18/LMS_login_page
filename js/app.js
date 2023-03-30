var form = document.getElementById("login-form");
// This variable stores the HTML form element with the ID "login-form"
var emailInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
// These variables store the email input and password input fields of the form

// This event listener is attached to the form when it is submitted
form.addEventListener("submit", function() {
  event.preventDefault();
  // This prevents the form from being submitted to the server and refreshing the page
  
  var emailValue = emailInput.value.trim();
  var passwordValue = passwordInput.value.trim();
  
 // This is an object that maps email addresses to their corresponding passwords
  var map ={"admin@example.com":"admin","admin1@example.com":"thaheer","thaheer@example.com":"admin1"};

  if (emailValue === "" || passwordValue === "") {
    alert("Please fill in all fields.");
  } // This block of code checks whether the entered email and password are valid
  else if (map[emailValue] == passwordValue) {
    // This redirects the user to the "success.html" page if their email and password are valid
     window.location.href="sucess.html";
  } else {
    alert("Invalid Email/Password !");
     // This resets the form fields if the entered email and password are invalid
    form.reset();
  }
});
