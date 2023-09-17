let pass = document.getElementById("password");
let mess = document.querySelector(".message");
let str = document.getElementById("strength");

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        mess.style.display = "block";
    }
    else {
        mess.style.display = "none";
    }
    if (pass.value.length < 4) {
        str.innerHTML = "weak";
        pass.style.borderColor = "rgb(60, 179, 113)";
        mess.style.color = "rgb(60, 179, 113)";
    }
    else if (pass.value.length >= 4 & pass.value.length < 8) {
        str.innerHTML = " medium";
        pass.style.borderColor = "rgb(106, 90, 205)";
        mess.style.color = "rgb(106, 90, 205)";
    }
    else if (pass.value.length >= 8) {
        str.innerHTML = "strong";
        pass.style.borderColor = "rgba(255, 99, 71, 1)";
        mess.style.color = "rgba(255, 99, 71, 1)";
    }
})