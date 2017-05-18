function Animation (params) {
  this.frames = [];
  this.frame = 0;
  this.velocidad = 0;
  Saga.params(this, params);
  this.img = new Image();
  this.img.src = this.img_src;
}

Animation.prototype.update = function () {
  this.sec = Saga.seconds()
  if(this.frames.hasOwnProperty(this.frame)) {
    this.frame_current = this.frames[this.frame];
  }
  this.frame++;
  if(this.frames.length == this.frame) {
    this.frame = 0;
  }
};

Animation.prototype.paint = function () {
  Saga.context().drawImage(
    this.img,
    this.frame_current.x,
    this.frame_current.y,
    this.frame_current.width,
    this.frame_current.height,
    this.person.position.x,
    this.person.position.y,
    this.person.position.width,
    this.person.position.height
  );      
}