function Animation (params) {
  Saga.params(this, params);
  if(!this.velocidad) {
    this.velocidad = 0;
  }
  if(!this.frame) {
    this.frame = 0;
  }
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