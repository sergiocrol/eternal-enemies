'use strict'

function Player(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.x = 20;
  this.y = (this.canvas.height/2)-10;
  this.lives = 3;
  this.velocity = 3;
  this.direction = 0;
  this.color = 'blue';
  this.height = 20;
  this.width = 20;
}

Player.prototype.move = function() {
  // this.direction is north o south, to know if I'm going up or down (it can be 0, 1 or -1)
  // this.velocity is the amount of pixels we are moving
  this.y = this.y + this.direction*this.velocity;
}

Player.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(this.x - this.width/2, this.y, this.width, this.height);
}

Player.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
}