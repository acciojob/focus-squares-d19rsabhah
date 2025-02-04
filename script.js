//your JS code here. If required.
// Select all squares
const squares = document.querySelectorAll('.square');

// Function to change the colors of other squares
function changeColors(event) {
    squares.forEach(square => {
        if (square !== event.target) {
            square.style.backgroundColor = "#6F4E37"; // Coffee color
        }
    });
}

// Function to reset all squares to lavender when the mouse leaves
function resetColors() {
    squares.forEach(square => {
        square.style.backgroundColor = "#E6E6FA"; // Lavender color
    });
}

// Add event listeners to each square
squares.forEach(square => {
    square.addEventListener("mouseenter", changeColors);
    square.addEventListener("mouseleave", resetColors);
});
