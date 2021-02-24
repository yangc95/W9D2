// class MovingObject() { 
//     constructor(pos, vel, radius, color) {
//         this.pos = pos;
//         this.vel = vel;
//         this.radius = radius;
//         this.color = color;
//     };

// }

function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.draw = function draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.fill();
    // ctx.stroke(); if we have fill we don't need stroke
}

MovingObject.prototype.move = function move(time) {
    ctx.beginPath();
    ctx.moveTo();
}

module.exports = MovingObject;