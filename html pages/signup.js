document.addEventListener("mousemove", function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const background = document.querySelector("body");
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (mouseX - centerX) / 20;
    const moveY = (mouseY - centerY) / 20;
    background.style.backgroundPosition = `${moveX}px ${moveY}px`;
});


function validateForm() {
    const name = document.getElementById("firstname-input-box").value.trim(); 
    const email = document.getElementById("email-input-box").value.trim();
    const password = document.getElementById('password-box').value.trim();
    const confirm_password = document.getElementById('confirm-password-box').value.trim();



    if( name === '' ) {
        alert('Please enter your first name.'); 
        return false; 
    }

    if (email === '') {
        alert('Please enter your email.');
        return false;
    } 
    else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (password === '') {
        alert('Please enter your password.');
        return false;
    }
    else if ( confirm_password === '') {
        alert('Please confirm your password.'); 
        return false; 
    }
    else if( password != confirm_password ) {
        alert('Password and confirm password values should be same!!'); 
        return false; 
    }

    return true; 
}

function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

const form = document.getElementById('SignUpForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (validateForm()) {
    form.submit();
    }
});