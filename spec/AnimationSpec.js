describe("Animation", function() {
  var animation;
  beforeEach(function() {
    animation = new Animation();
  });
  describe("CUANDO pido una instancia de Animation", function() {
    it("ENCONCES siempre debo tener animaciones para la persona", function () {
      expect(animation.velocidad).toEqual(0);
      expect(animation.frame).toEqual(0);
    });
    describe("Y CUANDO la actualizo", function() {
      animation = new Animation({
        frames:[
          {},
          {}
        ]
      });
      animation.update();
      animation.update();
    });
    describe("Y CUANDO la paint", function() {
      it("ENCONCES ")
      animation = new Animation({
        person: {
          position: {}
        },
        frames:[
          {x:1},
          {x:1}
        ]
      });
      animation.update();
      animation.paint();
    });
  });
});
describe("WalkRightAnimation", function() {
  describe("CUANDO pido una instancia de Animation", function() {
    describe("Y CUANDO la actualizo", function() {
      it("ENCONCES la position de la persona debe cambiar", function () {
        params = {
          person: {
            position: {x: 1}
          },
          velocidad: 1,
          frames:[
            {x:1, width:100},
            {x:1, width:100}
          ]
        };
        animation = new WalkRightAnimation(params);
        animation.update();
        expect(params.person.position.x).toEqual(101);
      });
    });
  });
});
describe("WalkLeftAnimation", function() {
  describe("CUANDO pido una instancia de Animation", function() {
    describe("Y CUANDO la actualizo", function() {
      it("ENCONCES la position de la persona debe cambiar", function () {
        params = {
          person: {
            position: {x: 2}
          },
          velocidad: 1,
          frames:[
            {x:1, width:100},
            {x:1, width:100}
          ]
        };
        animation = new WalkLeftAnimation(params);
        animation.frame_current = animation.frames[0];
        animation.update();
        expect(params.person.position.x).toEqual(-98);
      });
    });
  });
});