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
    _persons: null,
    persons: function () {
      if(!this._persons) {
        this._persons = new Persons();
      }
      return this._persons;
    },
    events: [],
    color: [],
    run_velocity: 150,
    init: function () {
      this.reset();
      this.run();
      this.repaint();
    },
    reset: function() {
    },
    run: function() {
      setTimeout(function () {Ownb.run()}, this.run_velocity);
      this.update();
    },
    update: function () {
      this.persons().update();
      Saga.mouse.lastPress = null;
    },
    repaint: repaint = function() {
      window.requestAnimationFrame(function () {Ownb.repaint()});
      Saga.frame++;
      this.paint();
    },
    paint: function () {
      Saga.canvas().width = 600;      
      Saga.canvas().height = 300;
      Saga.context().fillStyle = '#000';
      Saga.context().fillRect(0, 0, Saga.canvas().width, Saga.canvas().height);
      for(var i in this.persons().items) {
        var person = this.persons().items[i];
        person.paint();
      }
      Saga.context().fillStyle = '#0f0';
      Saga.context().fillText('date: ' + this.date(), 5, 275);
      Saga.context().fillText('seconds: ' + Saga.seconds(), 5, 285);
      Saga.context().fillText('frame: ' + Saga.frame, 5, 295);
    },
    velocidad: function () {
      if(this.date().getHours() > 8 && this.date().getHours() < 20) {
        return 30;
      }
      return 5;
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
    canvas: function (params) {
      return Saga.canvas();
    },
  };
})();