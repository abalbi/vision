describe("Ownb", function() {
  describe("CUANDO calculo la posivilidad de un nueva persona", function () {
    describe("Y CUANDO la hora es 13", function () {
      it("ENCONCES la posivilidad sera true", function () {
        spyDate = jasmine.createSpyObj('date',['getHours']);
        spyDate.getHours.and.returnValue(13);
        spyOn(Ownb, 'date').and.returnValue(spyDate);
        spyOn(Math, 'random').and.returnValue(0.1);
        var persons = new Persons();
        var posivilidad = persons.posibility();
        expect(posivilidad).toBe(true);
      })
    })
    describe("Y CUANDO la hora es 1", function () {
      it("ENCONCES la posivilidad sera false ", function () {
        spyDate = jasmine.createSpyObj('date',['getHours']);
        spyDate.getHours.and.returnValue(1);
        spyOn(Ownb, 'date').and.returnValue(spyDate);
        var persons = new Persons();
        var posivilidad = persons.posibility();
        expect(posivilidad).toBe(false);
      })
    })
  })
  describe("CUANDO tengo una person y limpio", function () {
    it("ENCONCES la cantidad de personas sera 0 ", function () {
      var persons = new Persons();
      persons.items.push(new Person().reset());
      var count = persons.items.length;
      persons.clean([0]);
      expect(persons.items.length).toEqual(count-1);
    });
  });
  describe("CUANDO agrego una persona", function () {
    describe("Y CUANDO la posivilidad es 0", function () {
      var persons = new Persons();
      persons.items = [];
      it("ENCONCES la cantidad de personas sera 0", function () {
        spyOn(persons,'posibility').and.returnValue(0);
        persons.add();
        expect(persons.items.length).toBe(0);
      });
    });
    describe("Y CUANDO la posivilidad es 1", function () {
      var persons;
      beforeEach(function() {
        persons = new Persons();
        spyOn(persons,'posibility').and.returnValue(1);
      });
      it("ENCONCES la cantidad de personas sera 1 ", function () {
        persons.items = [];
        persons.add();
        expect(persons.items.length).toBe(1);
      });
      describe("Y CUANDO la animacion es Left", function () {
        it("ENCONCES la position.x sera -20 ", function () {
          var person = new Person().reset();
          person.animation_current = person.animations[0];
          spyOn(persons, 'new').and.returnValue(person);
          persons.add();
          expect(persons.items.length).toEqual(1);
          expect(persons.items[0].position.x).toEqual(-20)
        });
      });
      describe("Y CUANDO la animacion es Right", function () {
        it("ENCONCES la position.x sera 600", function () {
          var person = new Person().reset();
          person.animation_current = person.animations[1];
          spyOn(persons, 'new').and.returnValue(person);
          persons.add();
          expect(persons.items[0].position.x).toEqual(Saga.canvas().width)
        });
      });
    });
  });
  describe("CUANDO actualizo a las personas", function () {
    var persons;
    beforeEach(function () {
      persons = new Persons();
      person = new Person().reset();
      spyOn(person, 'update');
      spyOn(persons, 'clean');
      persons.items = [person];
    })
    it("ENTONCES se debe llamar al update de cada persona", function () {
      person.position.x = 601
      persons.update();
      expect(person.update).toHaveBeenCalled();
    })
    describe("Y CUANDO la position de la person es mayor al width del canvas", function () {
      it("ENTONCES se debe llamar al update de cada persona", function () {
        person.position.x = Saga.canvas().width + 1;
        persons.update();
        expect(persons.clean).toHaveBeenCalledWith(['0']);
      })
    })
    describe("Y CUANDO la position de la person es menor al width del canvas menos 50", function () {
      it("ENTONCES se debe llamar al update de cada persona", function () {
        person.position.x = 0 - 60;
        persons.update();
        expect(persons.clean).toHaveBeenCalledWith(['0']);
      })
    })

  });
});
