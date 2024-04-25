document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.btn');
    const colorDisplay = document.querySelector('.color-display span');
    button.addEventListener('click', function () {
         const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
         document.body.style.backgroundColor = randomColor;
         colorDisplay.textContent = randomColor;
    });
});