describe("Saga", function() {
  beforeEach(function() {
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
  describe("CUANDO pido un context a saga", function() {
    it("ENCONCES debo obtener un context 2d", function(){
      expect(Saga.context().constructor.name).toEqual('CanvasRenderingContext2D');
    })
  });
});
