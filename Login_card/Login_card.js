let login = document.querySelector("#login");
let eyeicon = document.getElementById("eyeicon");
eyeicon.addEventListener("click", () => {
    if (login.type == "password") {
        login.type = "text"
        eyeicon.src = "eye-open.png";

    }
    else {
        login.type = "password";
        eyeicon.src = "eye-close.png";
    }
}) 
