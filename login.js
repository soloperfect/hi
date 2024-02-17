

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

   
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "admin" && password === "12345") {
      alert("Login successful!");

      
      window.location.href = "main.html"; 

      
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });