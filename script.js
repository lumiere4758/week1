let count = 0;

const button = document.getElementById("treat-btn");
const countDisplay = document.getElementById("treat-count");

button.addEventListener("click", function () {
    count++;

    if (count === 1) {
        button.textContent = `Clicked ${count} time!`;
    } else {
        button.textContent = `Clicked ${count} times!`;
    }

    countDisplay.textContent = count;
});