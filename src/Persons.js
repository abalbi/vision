function Persons () {
  this.items = [];
}

Persons.prototype.posibility = function () {
  var hour = Ownb.date().getHours();
  var xx = hour > 12 ? -(24 - hour) : hour;
  xx -= 2;
  var posibility;
  var yy = (.10 * (xx*xx))-1;
  if(yy < 0) yy = yy*-1;
  rand = Math.floor(Math.random() * 100);
  posibility =  rand < yy;
  return posibility;
}

Persons.prototype.add = function (item) {
  var is_new_person;
  if(this.posibility()) {
    var person = this.new();
    if(person.animation_current.constructor.name == 'WalkRightAnimation') {
      person.position.x = -person.position.width + 10;
    }
    if(person.animation_current.constructor.name == 'WalkLeftAnimation') {
      person.position.x = Saga.canvas().width;
    }
    this.items.push(person);
  }
}

Persons.prototype.new = function () {
  return new Person().reset();
}

Persons.prototype.clean = function (persons_delete) {
  for (i in persons_delete) {
    var elem = persons_delete[i];
    persons_delete.splice(i,1);
    this.items.splice(elem,1);
  }
}

Persons.prototype.update = function () {
  this.add();
  var persons_delete = []
  for(var i in this.items) {
    var person = this.items[i];
    person.update();
    if(Saga.canvas().width < person.position.x) {
      persons_delete.push(i);
    }
    if(person.position.x < 0 - 50){
      persons_delete.push(i);
    }
  }
  this.clean(persons_delete);
}
