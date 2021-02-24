const Asteroid = require("./asteroid");
const Bullet = require("./bullet");
const Ship = require("./ship");
const Util = require("./util");


function Game() {
    this.asteroids = [];
    this.bullets = [];
    this.ships = [];

    // this.addAsteroids(); 
}

Game.NUM_ASTEROIDS = 10;
Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;

// Game.prototype.addAsteroids = function addAsteroids() {
//     for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
//         this.add(new Asteroid({ game: this }));
//     }
// }


Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = Game.BG_COLOR;
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

  this.allObjects().forEach(function(object) {
    object.draw(ctx);
  });
};

module.exports = Game;