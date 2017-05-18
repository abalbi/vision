describe("Person", function() {
  var person;
  beforeEach(function() {
    person = new Person().reset();
  });
  describe("CUANDO pido una instancia de Person", function() {
    it("ENCONCES siempre debo tener animaciones para la persona", function () {
      expect(person.animations.length).toEqual(2);
    });
    describe("Y CUANDO actualizo el person", function() {
      it("ENCONCES se debe llamar al update de la animation_current", function () {
        spyOn(person.animation_current,'update')
        person.update();
        expect(person.animation_current.update).toHaveBeenCalled();
      });
    });
    describe("Y CUANDO hago el paint del person", function() {
      it("ENCONCES se debe llamar al paint de la animation_current", function () {
        spyOn(person.animation_current,'paint')
        person.paint();
        expect(person.animation_current.paint).toHaveBeenCalled();
      });
    });
    describe("Y CUANDO chequeo si la person fue clikeada", function() {
      it("ENCONCES si fue clikeado debo obtener un true", function () {
        Saga.mouse.lastPress = 2;
        Saga.mouse.x = person.position.x + 1;
        Saga.mouse.y = person.position.y + 1;
        expect(person.is_clicked()).toBe(true);
      });
    });

  });
});
