describe("Ownb", function() {
  beforeEach(function() {
  });
  describe("CUANDO pido una instancia de Ownb", function() {
    var ownb1 = Ownb.getInstance();
    var ownb2 = Ownb.getInstance();
    it("ENCONCES siempre debo recibir el mismo objeto", function () {
      expect(ownb1).toEqual(ownb2);
    })
		describe("Y CUANDO pido la fecha", function() {
			var fecha = Ownb.date();
			it("ENCONCES debo recibir una fecha", function () {
				expect(fecha.getYear()).toEqual(-499);
			})		
		});
		describe("Y CUANDO ejecuto el paint Y tengo persons", function() {
			it("ENCONCES debo recibir una fecha", function () {
				var spyPerson = jasmine.createSpyObj('person',['paint']);
				Ownb.persons().items.push(spyPerson);
				Ownb.paint();
				expect(spyPerson.paint).toHaveBeenCalled();
			})		
		});
		describe("Y CUANDO pido la velocidad", function() {
			var velocidad = Ownb.velocidad();
			it("ENCONCES debo recibir un 30", function () {
				expect(velocidad).toEqual(30);
			})
			describe("Y CUANDO pido la velocidad con la hora despues de las 20", function() {
				it("ENCONCES debo recibir un 5", function () {
	        spyDate = jasmine.createSpyObj('date',['getHours']);
	        spyDate.getHours.and.returnValue(23);
	        spyOn(Ownb, 'date').and.returnValue(spyDate);
					var velocidad = Ownb.velocidad();
					expect(velocidad).toEqual(5);
				})
			});
		});
  });
  describe("CUANDO inicio un Ownb", function() {
    Ownb.init();
    it("ENCONCES debo obtener un objeto canvas con ciertas caracteristacas", function() {
      expect(Ownb.canvas().nodeName).toEqual('CANVAS');
    });
  });
});
