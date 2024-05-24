imageArray = [
    "./assets/oak-tree.png",
    "./assets/pip.png",
    "./assets/pip-holding-moon.png",
    "./assets/pip-on-moon.png"
]

const lastFrame = document.querySelector("#last-frame");
const frame = document.querySelector("#frame");
const nextFrame = document.querySelector("#next-frame");
let lastFrameImage = document.createElement("img");
let frameImage = document.createElement("img");
let nextFrameImage = document.createElement("img");
lastFrameImage.src = imageArray[imageArray.length - 1];
frameImage.src = imageArray[0];
if (imageArray.length === 1) {
    nextFrameImage.src = imageArray[0];
} else {
nextFrameImage.src = imageArray[1];
}
lastFrame.appendChild(lastFrameImage);
frame.appendChild(frameImage);
nextFrame.appendChild(nextFrameImage);

let framePosition = 0;
adjustDots();

const rightArrow = document.querySelector("#right");
rightArrow.addEventListener("click", () => {
    moveFrameRight();
    adjustDots();
});

function moveFrameRight() {
    if (framePosition === (imageArray.length - 1)) {
        framePosition = 0;
    } else {
        framePosition++;
    }
    frameImage.src = imageArray[framePosition];
    adjustSideFrames();
    autoChange();
}

function moveFrameLeft() {
    if (framePosition === 0) {
        framePosition = (imageArray.length - 1);
    } else {
        framePosition--;            
    }
    frameImage.src = imageArray[framePosition];
    adjustSideFrames();
    autoChange();
}

const leftArrow = document.querySelector("#left");
leftArrow.addEventListener("click", () => {
    moveFrameLeft();
    adjustDots();
})

function adjustSideFrames() {
    if (framePosition === 0) {
        lastFrameImage.src = imageArray[imageArray.length -1];
        nextFrameImage.src = imageArray[framePosition + 1];
    } else if (framePosition === (imageArray.length - 1)) {
        lastFrameImage.src = imageArray[framePosition - 1];
        nextFrameImage.src = imageArray[0]
    } else {
        lastFrameImage.src = imageArray[framePosition - 1];
        nextFrameImage.src = imageArray[framePosition + 1];
    }
}
function adjustDots() {
    const dotContainer = document.querySelector(".dot-container");
    dotContainer.replaceChildren();
    for (const x of imageArray) {
        const dot = document.createElement("img");
        if (imageArray.indexOf(x) === framePosition) {
            dot.src = "./assets/circle.svg";
        } else {
            dot.src = "./assets/circle-outline.svg";
            dot.addEventListener("click", () => {
                framePosition = imageArray.indexOf(x);
                frameImage.src = imageArray[framePosition];
                adjustSideFrames();
                adjustDots();
            });
        }
        dot.className = "dots";
        dotContainer.appendChild(dot);
        console.log(imageArray.indexOf(x));

    }
}
let carouselTimer;
function autoChange() {

    clearTimeout(carouselTimer);
    carouselTimer = setTimeout(() => {
        moveFrameRight();
        adjustDots();
    }, "3000");
}

autoChange();
