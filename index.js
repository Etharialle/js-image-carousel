imageArray = [
    "./assets/oak-tree.png",
    "./assets/pip.png",
    "./assets/pip-holding-moon.png",
    "./assets/pip-on-moon.png"
]

const frame = document.querySelector("#frame");
let frameImage = document.createElement("img");
frameImage.src = imageArray[0];
frame.appendChild(frameImage);

let framePosition = 0;

const rightArrow = document.querySelector("#right");
rightArrow.addEventListener("click", () => {
    if (framePosition === (imageArray.length - 1)) {
        framePosition = 0;
    } else {
        framePosition++;
    }
    frameImage.src = imageArray[framePosition];
})