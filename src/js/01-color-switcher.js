let intervalId;

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]'); // Get a reference to the stop button

startButton.addEventListener('click', function() {
    this.disabled = true; // Disable the start button
    stopButton.disabled = false; // Enable the stop button
    intervalId = setInterval(function() {
        const randomColor = getRandomHexColor(); // Get a random color
        document.body.style.backgroundColor = randomColor;
    }, 1000);
});

stopButton.addEventListener('click', function() {
    clearInterval(intervalId);
    this.disabled = true; // Disable the stop button
    startButton.disabled = false; // Enable the start button when stop is clicked
});

function getRandomHexColor() {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
