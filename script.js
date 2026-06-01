let grid =
document.querySelector(".grid");

let totalBoxes = 16;

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

    let oddIndex =
    randomNumber(0,totalBoxes-1);

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

        }else{

            box.style.background =
            normalColor;

        }

        grid.appendChild(box);

    }

}

createPuzzle();