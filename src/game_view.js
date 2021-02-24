function GameView(game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.ship = this.game.addShip();
}

module.exports = GameView;