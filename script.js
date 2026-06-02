let grid =
document.querySelector(".grid");

let scoreText =
document.querySelector(".score");

let levelText =
document.querySelector(".level");

let timerText =
document.querySelector(".timer");

let startBtn =
document.querySelector(".start-btn");

let restartBtn =
document.querySelector(".restart-btn");

let gameOverBox =
document.querySelector(".game-over");

let finalScore =
document.querySelector(".final-score");

let totalBoxes = 16;

let score = 0;

let level = 1;

let time = 30;

let gameRunning = false;

let timerInterval;

function randomNumber(min,max){

    return Math.floor(
        Math.random() *
        (max - min + 1)
    ) + min;

}

function createPuzzle(){

    if(!gameRunning){
        return;
    }

    grid.innerHTML = "";

    let red =
    randomNumber(50,220);

    let green =
    randomNumber(50,220);

    let blue =
    randomNumber(50,220);

    let normalColor =
    `rgb(${red},${green},${blue})`;

    let oddColor =
    `rgb(${red+15},${green+15},${blue+15})`;

    let oddIndex =
    randomNumber(
        0,
        totalBoxes - 1
    );

    for(let i=0;i<totalBoxes;i++){

        let box =
        document.createElement("div");

        box.classList.add("box");

        if(i === oddIndex){

            box.style.background =
            oddColor;

            box.dataset.odd =
            "true";

        }else{

            box.style.background =
            normalColor;

        }

        box.addEventListener(
            "click",
            checkAnswer
        );

        grid.appendChild(box);

    }

}

function checkAnswer(){

    if(
        !gameRunning
    ){
        return;
    }

    if(
        this.dataset.odd ===
        "true"
    ){

        score++;

        level++;

        scoreText.innerText =
        score;

        levelText.innerText =
        level;

        this.classList.add(
            "correct"
        );

        setTimeout(
            createPuzzle,
            200
        );

    }

}

function startGame(){

    score = 0;
    level = 1;
    time = 30;

    gameRunning = true;

    scoreText.innerText =
    score;

    levelText.innerText =
    level;

    timerText.innerText =
    time;

    gameOverBox.classList.add(
        "hidden"
    );

    createPuzzle();

    clearInterval(
        timerInterval
    );

    timerInterval =
    setInterval(function(){

        time--;

        timerText.innerText =
        time;

        if(time <= 0){

            endGame();

        }

    },1000);

}

function endGame(){

    gameRunning = false;

    clearInterval(
        timerInterval
    );

    finalScore.innerText =
    "Score: " + score;

    gameOverBox.classList.remove(
        "hidden"
    );

}

startBtn.onclick =
startGame;

restartBtn.onclick =
startGame;