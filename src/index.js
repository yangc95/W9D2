const MovingObject = require("./moving_object");
const Game = require("./game");
const GameView = require("./game_view");


console.log("Webpack is working!")


// const mo = new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00"
// });


// window.MovingObject = MovingObject;



document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('canvas');
    canvasEl.width = 500;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext('2d'); 
    const game = new Game();
    // new GameView(game, ctx).start();
    
    // const circleX = canvasEl.width / 2;
    // const circleY = canvasEl.height / 2;
    // const radius = 100;
})


