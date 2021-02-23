const Asteroid = require("./asteroid");
const Bullet = require("./bullet");
const Ship = require("./ship");
const Util = require("./util");


function Game() {
    this.asteroids = [];
    this.bullets = [];
    this.ships = [];

    this.addAsteroids(); 
}

Game.NUM_ASTEROIDS = 10;
Game.BG_COLOR = "#000000";

Game.prototype.addAsteroids = function () {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        this.add(new Asteroid({game: this}));
    };
}