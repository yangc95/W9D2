// class MovingObject() { 
//     constructor(pos, vel, radius, color) {
//         this.pos = pos;
//         this.vel = vel;
//         this.radius = radius;
//         this.color = color;
//     };

// }

function MovingObject(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
};

MovingObject.prototype.draw = function draw(ctx) {
    ctx.fillStyle = "grey";
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 2 * Math.PI);
    ctx.fill();
    // ctx.stroke(); if we have fill we don't need stroke
};

MovingObject.prototype.move = function move(ctx) {
    ctx.beginPath();
    ctx.moveTo();
};

module.exports = {
    MovingObject
};