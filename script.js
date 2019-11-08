var css = document.querySelector("h3");
var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.getElementsByClassName("color2")[0];
var body = document.getElementById("gradient");
var button = document.getElementsByClassName("generate-random-colors")[0];
console.log(color1.value);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setGradientColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradientColor);
color2.addEventListener("input", setGradientColor);

button.addEventListener("click", function () {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradientColor();
});