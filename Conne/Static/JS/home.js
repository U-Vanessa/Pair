const slider = document.querySelector('.service-slider');
const buttons = document.querySelectorAll('.slider-button');

let currentIndex = 0;

function moveSlide(index) {
    currentIndex = index;
    const offset = -index * 33.3333; // Adjusted to 33.3333% based on each slide width
    slider.style.transform = `translateX(${offset}%)`;

    // Update active button
    buttons.forEach((button, idx) => {
        button.classList.toggle('active', idx === index);
    });
}

// Initialize first button as active
moveSlide(0);

// Optional: Add click event listeners to buttons if you want to avoid inline onclick attributes
buttons.forEach((button, index) => {
    button.addEventListener('click', () => moveSlide(index));
});
