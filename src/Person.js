function Person () {
}

Person.prototype.reset = function () {
  this.animations = [
    new WalkRightAnimation({
      person: this,
      img_src: 'img/advnt00_r.png', 
      frames: [
        {x: 30,  y:0, width: 30, height: 70},
        {x: 62,  y:0, width: 30, height: 70},
        {x: 94,  y:0, width: 30, height: 70},
        {x: 126, y:0, width: 30, height: 70},
        {x: 158, y:0, width: 30, height: 70},
        {x: 190, y:0, width: 30, height: 70},
      ],
      velocidad: .215
    }),
    new WalkLeftAnimation({
      person: this,
      img_src: 'img/advnt00_l.png', 
      frames: [
        {x: 250, y:0, width: 30, height: 70},
        {x: 218, y:0, width: 30, height: 70},
        {x: 186, y:0, width: 30, height: 70},
        {x: 154, y:0, width: 30, height: 70},
        {x: 122, y:0, width: 30, height: 70},
        {x: 90,  y:0, width: 30, height: 70},
      ],
      velocidad: .25
    }),
  ];
  this.position = {
    x: 0,
    y: 50,  
    width: 30,
    height: 70
  };
  this.animation_current = this.animations[Math.floor(Math.random()*this.animations.length)];
  return this;
}
Person.prototype.update = function () {
  this.animation_current.update();
  if(this.is_clicked()) {
    console.log('clik');
  }
}
Person.prototype.paint = function () {
  this.animation_current.paint();
}
Person.prototype.is_clicked = function() {
  return Saga.mouse.lastPress > 0 &&
    Saga.mouse.x > this.position.x &&
    Saga.mouse.x < this.position.x + this.position.width &&
    Saga.mouse.y > this.position.y &&
    Saga.mouse.y < this.position.y + this.position.height;

}