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
    color: [],
    init: function () {
      document.addEventListener('mousemove',function(evt){ 
        Saga.mouse.x = evt.pageX-Saga.canvas().offsetLeft;
        Saga.mouse.y = evt.pageY-Saga.canvas().offsetTop;
      } ,false);
      document.addEventListener('mousedown',function(evt){ 
        Saga.mouse.lastPress = evt.which; 
      },false);
      this.reset();
      this.run();
      this.repaint();
    },
    reset: function() {
    },
    run: function() {
      setTimeout(function () {Ownb.run()}, 150);
      this.update();
    },
    repaint: repaint = function() {
      window.requestAnimationFrame(function () {Ownb.repaint()});
      Saga.frame++;
      this.paint();
    },
    new_person: function () {
      var is_new_person;
      if(this.new_person_posibility()) {
        var person = new Person().reset();
        if(person.animation_current.constructor.name == 'WalkRightAnimation') {
          person.position.x = -person.position.width + 10;
        }
        if(person.animation_current.constructor.name == 'WalkLeftAnimation') {
          person.position.x = Saga.canvas().width;
        }
        this.persons.push(person);
      }
    },
    new_person_posibility: function () {
      var hour = this.date().getHours();
      var xx = hour > 12 ? -(24 - hour) : hour;
      xx -= 2;
      var posibility;
      var yy = (.10 * (xx*xx))-1;
      if(yy < 0) yy = yy*-1;
      posibility = Math.floor(Math.random() * 100) < yy;
      return posibility;
    },
    clean_persons: function (persons_delete) {
      for (i in persons_delete) {
        var elem = persons_delete[i];
        persons_delete.splice(i,1);
        this.persons.splice(elem,1);
      }
    },
    update: function () {
      this.new_person();
      var persons_delete = []
      for(var i in this.persons) {
        var person = this.persons[i];
        person.update();
        if(Saga.canvas().width < person.position.x) {
          persons_delete.push(i);
        }
        if(person.position.x < 0 - 50){
          persons_delete.push(i);
        }
      }
      this.clean_persons(persons_delete);
      Saga.mouse.lastPress = null;
    },
    paint: function () {
      Saga.canvas().width = 600;      
      Saga.canvas().height = 300;
      Saga.context().fillStyle = '#000';
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