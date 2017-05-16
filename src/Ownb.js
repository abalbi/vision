Ownb = (function () {
  var instance;
  function createInstance() {
    var object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
    persons: [],
    init: function () {
      this.reset();
      this.run();
      this.repaint();
    },
    run: function() {
      setTimeout(function () {Ownb.run()}, 150);
      this.update();
    },
    reset: function() {
      this.persons.push(new Person().reset());
      this.persons.push(new Person().reset());
      this.persons[0].animation_current.velocidad = .20;
      this.persons[1].animation_current.velocidad = .10;
    },
    color: [],
    update: function () {
      this.color++;
      //var minutes = 255 / (this.date().getHours() * 60 * 60 + this.date().getMinutes() * 60 + this.date().getSeconds());
      var hour = this.date().getHours()
      this.color = this.kelvinToRGB(hour);
      this.color[0] = this.color[0].toString(16).length == 1 ? '0'+this.color[0].toString(16) : this.color[0].toString(16); 
      this.color[1] = this.color[1].toString(16).length == 1 ? '0'+this.color[1].toString(16) : this.color[1].toString(16); 
      this.color[2] = this.color[2].toString(16).length == 1 ? '0'+this.color[2].toString(16) : this.color[2].toString(16); 
      for(var i in this.persons) {
        var person = this.persons[i];
        person.update();
      }
    },
    velocidad: function () {
      if(this.date().getHours() > 8 && this.date().getHours() < 20) {
        return 30;
      }
      return 5;
    },
    repaint: repaint = function() {
      window.requestAnimationFrame(function () {Ownb.repaint()});
      Saga.frame++;
      this.paint();
    },
    date: function () {
      if(!this._date) {
        this._date = new Date(Date.parse('1401-01-04T18:00:00Z'));
      }
      if(this._now != Saga.seconds()) {
        this._now = Saga.seconds()
        this._date.setSeconds(this._date.getSeconds() + (60 * this.velocidad()));
      }
      return this._date;
    },
    paint: function () {
      Saga.canvas().width = 600;      
      Saga.canvas().height = 300;
      Saga.context().fillStyle = '#'+this.color[0]+this.color[1]+this.color[2];
      Saga.context().fillRect(0, 0, Saga.canvas().width, Saga.canvas().height);
      for(var i in this.persons) {
        var person = this.persons[i];
        person.paint();
      }
      Saga.context().fillStyle = '#0f0';
      Saga.context().fillText('date: ' + this.date(), 5, 275);
      Saga.context().fillText('seconds: ' + Saga.seconds(), 5, 285);
      Saga.context().fillText('frame: ' + Saga.frame, 5, 295);
    },
    canvas: function (params) {
      return Saga.canvas();
    },
    kelvinToRGB: function (hour, out) {
      if (!Array.isArray(out)) {
        out = [0, 0, 0]
      }
      h = hour;
      if(h > 12) {
        h = 12 - (h - 12)
      }
      var red=1, blue=1, green=1;
      red = (255 * h)/12;
      green = (255 * h)/12;
      blue = -1 + (255 * h)/12;



      out[0] = Math.floor(red)
      out[1] = Math.floor(green)
      out[2] = Math.floor(blue)
      return out
    }
  };
})();