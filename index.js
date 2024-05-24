imageArray = [
    "./assets/oak-tree.png",
    "./assets/pip.png",
    "./assets/pip-holding-moon.png",
    "./assets/pip-on-moon.png"
]

const frame = document.querySelector("#frame");
const firstImage = document.createElement("img");
firstImage.src = imageArray[0];
frame.appendChild(firstImage);