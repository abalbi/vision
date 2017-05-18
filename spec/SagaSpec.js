describe("Saga", function() {
  beforeEach(function() {
  });
  describe("CUANDO pido una instancia de saga", function() {
    var saga1 = Saga.getInstance();
    var saga2 = Saga.getInstance();
    it("ENCONCES siempre debo recibir el mismo objeto", function () {
      expect(saga1).toEqual(saga2);
    })
  });
  describe("CUANDO inicio Saga", function() {
    it("ENCONCES debo recibir un true", function () {
      spyOn(Ownb,'init').and.returnValue(true);
      Saga.init('Ownb');
      expect(Ownb.init).toHaveBeenCalled();
    })
  });
  describe("CUANDO pido un canvas a saga", function() {
    it("ENCONCES debo obtener un objeto canvas", function() {
      expect(Saga.canvas({id:'mainCanvas'}).nodeName).toEqual('CANVAS');
      expect(document.getElementById('mainCanvas').id).toEqual(Saga.canvas().id);
    });
    describe("Y CUANDO pido un canvas con propiedades definidad", function() {
      beforeEach(function() {
      });
      it("ENCONCES debo obtener un objeto canvas con esas propiedades", function() {
        expect(Saga.canvas({width : 1000}).width).toEqual(1000);
      });
    });
    describe("Y CUANDO pido un canvas con propiedades definidad", function() {
      beforeEach(function() {
      });
      it("ENCONCES debo obtener un objeto canvas con esas propiedades", function() {
        expect(Saga.canvas({width : 1000}).width).toEqual(1000);
      });
    });
  });
  describe("CUANDO pido el context a saga", function() {
    it("ENCONCES debo obtener un objeto context", function() {
      Saga._context = null;
      expect(Object.prototype.toString.call(Saga.context())).toEqual('[object CanvasRenderingContext2D]');
    });
  });
  describe("CUANDO pido los seconds de sistema", function () {
    it("ENTONCES debo recibir un numero", function () {
      Saga._start = null;
      expect(Saga.seconds()).toMatch(/^\d+$/)
      expect(Saga._start).toMatch(/^\d+$/)
      expect(Saga.seconds()).toMatch(/^\d+$/)
    })
  });
  describe("CUANDO pido asignar params a un objeto", function () {
    it("ENTONCES el objeto debe tener las propiedades", function () {
      var empty = {};
      var params = {
        a: 'A',
        b: 'B',
      }
      Saga.params(empty, params);
      expect(empty.a).toEqual('A')
      expect(empty.b).toEqual('B')
    })
  });
  describe("CUANDO pido un context a saga", function() {
    it("ENCONCES debo obtener un context 2d", function(){
//      expect(Saga.context().constructor.name).toEqual('CanvasRenderingContext2D');
    })
  });
});
