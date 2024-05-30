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
    const email = document.querySelector('input[type="text"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();
    const rememberMe = document.querySelector('input[type="checkbox"]').checked;

    if (email === '') {
    alert('Please enter your email.');
    return false;
    } else if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return false;
    }

    if (password === '') {
    alert('Please enter your password.');
    return false;
    }

    return true; 
}

function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

const form = document.getElementById('loginForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (validateForm()) {
    form.submit();
    }
});