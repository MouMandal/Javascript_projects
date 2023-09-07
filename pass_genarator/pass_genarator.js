const button = document.querySelector("button");
const img = document.querySelector("img");
const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0,1,2,3,4,5,6,7,8,9";
const symbol = "!@#$%^&*(){}[]<>/-=+_";
const allChars = upperCase + lowerCase + number + symbol;
button.onclick = function () {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}
img.onclick = function () {
    passwordBox.select();
    document.execCommand("copy");
}