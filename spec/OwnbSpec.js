describe("Ownb", function() {
  beforeEach(function() {
  });
  describe("CUANDO inicio un Ownb", function() {
    Ownb.init();
    it("ENCONCES debo obtener un objeto canvas con ciertas caracteristacas", function() {
      expect(Ownb.canvas().nodeName).toEqual('CANVAS');
      expect($('#mainCanvas').attr('id')).toEqual(Saga.canvas().id);
    });
  });
});
