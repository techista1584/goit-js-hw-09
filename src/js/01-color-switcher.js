let intervalId;

document.querySelector('[data-start]').addEventListener('click', function() {
    intervalId = setInterval(function() {
        const randomColor = getRandomHexColor(); // Get a random color
        document.body.style.backgroundColor = randomColor;
    }, 1000);
});

document.querySelector('[data-stop]').addEventListener('click', function() {
    clearInterval(intervalId);
});

function getRandomHexColor() {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`; // Use RGBA for transparency
}
