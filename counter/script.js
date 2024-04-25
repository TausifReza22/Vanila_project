let count = 0;
const counterElement = document.getElementById('counter');

function increaseCounter() {
     count++;
     counterElement.textContent = count;
    
}

function decreaseCounter() {
     count--;
     counterElement.textContent = count;
}

function resetCounter() {
     count = 0;
     counterElement.textContent = count;
}