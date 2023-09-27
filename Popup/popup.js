let popup = document.querySelector("#popup");
let btn = document.querySelector(".btn");
let btn1 = document.getElementById("btn1");
btn.onclick = () => {
    popup.classList.add("open-popup");
}
btn1.onclick = () => {
    popup.classList.remove("open-popup");
}