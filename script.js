//your JS code here. If required.
// Select all squares
// Select all squares
const squares = document.querySelectorAll('.square');

// Function to change the colors of other squares when hovering over one
function changeColors(event) {
    squares.forEach(square => {
        if (square !== event.target) {
            square.style.backgroundColor = "rgb(111, 78, 55)"; // Coffee color
        }
    });
}

// Function to reset all squares to lavender when the mouse leaves
function resetColors() {
    squares.forEach(square => {
        square.style.backgroundColor = "rgb(230, 230, 250)"; // Lavender color
    });
}

// Add event listeners to each square
squares.forEach(square => {
    square.addEventListener("mouseover", changeColors);
    square.addEventListener("mouseout", resetColors);
});

