Saga = (function () {
  var instance;
  function createInstance() {
    var object = new Object();
    return object;
  }

  return {
    frame: 0,
    mouse: {
      x: null,
      y: null,
    },
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
    canvas: function (params) {
      if(!this._canvas) {
        this._canvas = document.createElement('canvas');
        var body = $('body')[0];
        body.appendChild(this._canvas);
      }
      this.params(this._canvas, params);
      return this._canvas;
    },
    context: function (params) {
      if(!this._context) {
        this._context = this.canvas().getContext('2d');
      }
      return this._context;
    },
    init: function (argument) {
      document.addEventListener('mousemove',function(evt){ 
        Saga.mouse.x = evt.pageX-Saga.canvas().offsetLeft;
        Saga.mouse.y = evt.pageY-Saga.canvas().offsetTop;
      } ,false);
      document.addEventListener('mousedown',function(evt){ 
        Saga.mouse.lastPress = evt.which; 
      },false);
      eval(argument + ".init();");
      return true;
    },
    params: function (obj, params) {
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          obj[key] = params[key];
        }
      }
    },
    seconds: function () {
      if(!this._start) {
        this._start = Math.floor(Date.now()/1000);
      }
      return Math.floor(Date.now()/1000) - this._start;
    }
  };
})();