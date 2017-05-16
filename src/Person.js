function Person () {
}

Person.prototype.reset = function () {
  this.animation_current = new Animation(
    {
      person: this,
      img_src: 'img/advnt00_r.png', 
      frames: [
        {x: 30, y:0, width: 30, height: 70},
        {x: 62, y:0, width: 30, height: 70},
        {x: 94, y:0, width: 30, height: 70},
        {x: 126, y:0, width: 30, height: 70},
        {x: 158, y:0, width: 30, height: 70},
        {x: 190, y:0, width: 30, height: 70},
      ],
      velocidad: .15
    }
  );
  this.position = {
    x: 50,
    y: 50,
    width: 30,
    height: 70
  };

  return this;
}
Person.prototype.update = function () {
  this.animation_current.update();
}
Person.prototype.paint = function () {
  this.animation_current.paint();
}