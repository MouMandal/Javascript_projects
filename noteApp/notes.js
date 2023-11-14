let btn = document.querySelector("button");
let text = document.querySelector(".text");
btn.addEventListener("click", () => {
    // console.log("click");
    text.classList.add("text");
    text.classList.remove("hideTextInputContainer");

})

