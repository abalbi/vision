function WalkRightAnimation(params) {
  Animation.call(this, params);
}

WalkRightAnimation.prototype = Object.create(Animation.prototype);
WalkRightAnimation.prototype.constructor = WalkRightAnimation;

WalkRightAnimation.prototype.update = function () {
  Animation.prototype.update.call(this);
  this.person.position.x = this.person.position.x + this.frame_current.width * this.velocidad;
//  if(this.person.position .x > Saga.canvas().width + this.person.position.width) {
//    this.person.position.x = 0 - this.person.position.width
//  }
};