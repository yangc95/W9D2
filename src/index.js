const MovingObject = require("./moving_object");


console.log("Webpack is working!")

document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('game-canvas');

    canvasEl.width = 500;
    canvasEl.height = 500;
    canvasEl.fillStyle = "black";
    canvasEl.fill();

    var c = canvasEl.getContext('2d'); 


    // const circleX = canvasEl.width / 2;
    // const circleY = canvasEl.height / 2;
    // const radius = 100;
})