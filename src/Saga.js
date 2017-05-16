Saga = (function () {
  var instance;
  function createInstance() {
    var object = new Object("I am the instance");
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