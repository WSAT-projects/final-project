// Register Form
function regAction(e) {
    e.preventDefault();
    
    const email = document.getElementById('signupEmail').value;
    const pass = document.getElementById('signupPass').value;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passMinLength = 8;

    if (email == "" && pass == "") {
        window.alert("Successfully Registered!");
    } else if (!emailRegex.test(email)) {
        window.alert("Invalid email format!");
        return;
    } else if (pass.length < passMinLength) {
        window.alert(`Password must be at least ${passMinLength} characters long!`);
        return;
    } else {
        // Store user information in local storage
        localStorage.setItem('email', email);
        localStorage.setItem('password', pass);

        window.alert("Successfully registered!");
        window.location.href = "login.html"; 
    }
}

// Login Form
function logAction(e){
    e.preventDefault();
    const enterEmail = document.getElementById('loginEmail').value;
    const enterPass = document.getElementById('loginPass').value;

    // Retrieve user information from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPass = localStorage.getItem('password');

    if (enterEmail === storedEmail && enterPass === storedPass) {
        window.alert("Login successful!");
        window.location.href = "member.html"; 
    } else {
        window.alert("Invalid username or password!");
    }
}
