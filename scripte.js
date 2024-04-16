document.addEventListener('DOMContentLoaded', function () {
    // Form validation script
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        let hasError = false;

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name) {
            alert('Будь ласка, введіть ваше імʼя.');
            hasError = true;
        }

        if (!email || !email.includes('@')) {
            alert('Будь ласка, введіть коректний email.');
            hasError = true;
        }

        if (!message) {
            alert('Будь ласка, введіть повідомлення.');
            hasError = true;
        }

        if (hasError) {
            event.preventDefault();
        }
    });

    // Background interaction script
    let mainBackground = document.querySelector('body');
    mainBackground.addEventListener('mousemove', function(e) {
        let width = window.innerWidth;
        let height = window.innerHeight;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let bgPosX = (mouseX / width * 100);
        let bgPosY = (mouseY / height * 100);
        mainBackground.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    });
});
