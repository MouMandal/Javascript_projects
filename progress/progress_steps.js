
let progress = document.getElementById("progress");
let circle = document.querySelectorAll(".circle");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let Current = 1;
next.addEventListener("click", () => {
    Current++;
    if (Current > circle.length) {
        Current = circle.length;
    }
    update();
});
prev.addEventListener("click", () => {
    Current--;
    if (Current < 1) {
        Current = 1;
    }
    update();
});
const update = () => {
    circle.forEach((circle, index) => {
        console.warn(index)
        console.warn(Current)
        if (index < Current) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });
    const actives = document.querySelectorAll(".active");
    progress.style.width = (
        (actives.length - 1) / (circle.length - 1)
    ) * 100 + "%";
    console.warn(circle.length)
    if (Current === 1) {
        prev.disabled = true;
    } else if (Current === circle.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
};

