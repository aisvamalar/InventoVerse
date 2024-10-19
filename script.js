document.getElementById('joinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form Submitted!");
    
});

const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

navbarToggle.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
});
