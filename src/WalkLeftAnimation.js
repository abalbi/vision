function WalkLeftAnimation(params) {
  Animation.call(this, params);
}

WalkLeftAnimation.prototype = Object.create(Animation.prototype);
WalkLeftAnimation.prototype.constructor = WalkLeftAnimation;

WalkLeftAnimation.prototype.update = function () {
  Animation.prototype.update.call(this);
  this.person.position.x = this.person.position.x - this.frame_current.width * this.velocidad;
//  if(this.person.position.x < 0 - this.person.position.width * 2) {
//    this.person.position.x = Saga.canvas().width
//  }
};