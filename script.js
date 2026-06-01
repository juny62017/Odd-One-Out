let grid =
document.querySelector(".grid");

let scoreText =
document.querySelector(".score");

let levelText =
document.querySelector(".level");

let totalBoxes = 16;

let score = 0;

let level = 1;

let oddIndex = 0;

function randomNumber(min,max){

    return Math.floor(
        Math.random() *
        (max - min + 1)
    ) + min;

}

function createPuzzle(){

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

    oddIndex =
    randomNumber(
        0,
        totalBoxes-1
    );

    for(
        let i = 0;
        i < totalBoxes;
        i++
    ){

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
        this.dataset.odd ===
        "true"
    ){

        this.classList.add(
            "correct"
        );

        score++;

        level++;

        scoreText.innerText =
        score;

        levelText.innerText =
        level;

        setTimeout(
            createPuzzle,
            200
        );

    }

}

createPuzzle();