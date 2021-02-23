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

MovingObject.prototype.draw(ctx) {
    
};

module.exports = {
    MovingObject
};