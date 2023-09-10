let selector = document.querySelector(".selector");
let selectField = document.querySelector(".selectField");
let para = document.querySelector(".para");
let arrow = document.getElementById("arrow");
let list = document.getElementById("list");
let options = document.querySelectorAll(".options");

selectField.onclick = function () {
    list.classList.toggle("hide");
    arrow.classList.toggle("roted");
}
for (options of options) {
    options.onclick = function () {
        para.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrow.classList.toggle("roted");
    }
}