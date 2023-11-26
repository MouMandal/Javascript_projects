let inputDir = { x: 0, y: 0 };
const gameOver = new Audio("gameover.mp3");
const move = new Audio("move.mp3");
const foodSong = new Audio("food.mp3");
const music = new Audio("music.mp3");
let contain = document.querySelector(".contain");
let score = 0;
let snakeArr = [{
    x: 13, y: 15,
}]
let food = {
    x: 6, y: 8,
}
function main() {
    const start = Date.now();
    function update() {
        const current = Date.now() - start;
        game();
    }
    setInterval(() => {
        update();
    }, 200);

}
main();

function collisions(snakeArr) {
    //7.IF THE SANKE BUMP YOURSELF
    for (let i = 1; i < snakeArr.length; i++) {
        if (snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y) {
            return true;
        }
    }
    //8.IF THE SANKE BUMP THE WALL
    if (snakeArr[0].x >= 18 || snakeArr[0].x <= 0 || snakeArr[0].y >= 18 || snakeArr[0].y <= 0) {
        return true;

    }

}
function game() {
    //6.UPDATE THE SNAKE ARRAY AND ALSO FOOD ARRAY
    if (collisions(snakeArr)) {
        gameOver.play();
        move.pause();
        music.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game over press any key play again");
        snakeArr = [{ x: 13, y: 15, }];
        music.play();
        score = 0;
    }
    //4.IF SNAKE HAD EATEN THE FOOD THEN UPDATE THE SCORE AND ALSO REGENERATE THE FOOD
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSong.play();
        score += 1;
        scoreBoard.innerHTML = "score:" + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
    }
    //5.MOVING SNAKE
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    //1.UPDATE SNAKE ELEMENT
    contain.innerHTML = "";
    snakeArr.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add("head");
        }
        else {
            snakeElement.classList.add("snake");
        }
        contain.appendChild(snakeElement);
    })
    //2.UPDATE FOOD ELEMENT
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    contain.appendChild(foodElement);

}
//3.HANDLE THE KEYBOARD INPUT
window.addEventListener("keydown", e => {
    inputDir = { x: 0, y: 1 };
    move.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            console.log("wrong key");
            break;
    }
})

