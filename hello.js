let labelColor = document.querySelector(".circle");
const changeColor = document.querySelector(".changeclr");
const btnLabel = document.querySelector(".btn--new");

const colors = [
    "red",
    "blue",
    "orange",
    "purple",
    "deeppink",
    "brown",
    "chocolate",
    "deepskyblue",
    "black",
    "darkgreen",
    "darkmagenta",
    "crimson",
];

const changeColors = function(arr) {
    const randomColor = Math.trunc(Math.random() * 11) + 1;
    labelColor = `${colors[randomColor]}`;
    document.querySelector(".changeclr").textContent = labelColor;
    console.log(labelColor);
    document.querySelector(".circle").style.backgroundColor = labelColor;
};
document.querySelector(".btn--new").addEventListener("click", function() {
    changeColors();
});