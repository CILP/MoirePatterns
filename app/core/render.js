  /**
   * Objeto que representa los metodos y propiedades para
   * renderizar elementos en el canvas.
   * @constructor
   * @param {object} config - Confihuracion inicial del objeto renderizador.
   */
  function Render(){
      this.canvasTarget = null;
      this.virtualCanvas = null;
      this.xOrigen = null;
      this.yOrigen = null;
      this.xDestino = null;
      this.yDestino = null;
      this.colorLienzo = null;
      this.tamanoLienzo = null;
  }

  Render.prototype.target = function(nombreCanvas){
    this.canvasTarget = (nombreCanvas == null) ? null : nombreCanvas;
    return this;
  };

  Render.prototype.origen = function (x, y) {
    this.xOrigen = (x == null) ? 0 : x;
    this.yOrigen = (y == null) ? 0 : y;
    return this;
  };

  Render.prototype.destino = function (x, y) {
    this.xDestino = (x == null) ? 0 : x;
    this.yDestino = (y == null) ? 0 : y;
    return this;
  };

  Render.prototype.color = function (color) {
    this.colorLienzo = (color == null) ? "#0C0" : color;
    return this;
  };

  Render.prototype.tamano = function(tamano) {
    this.tamanoLienzo = (tamano == null) ? 32 : tamano;
    return this;
  };

  Render.prototype.renderizar = function(){
    if (this.virtualCanvas){
      var destino = document.getElementById(this.canvasTarget).getContext('2d');
      destino.drawImage(this.virtualCanvas, 0, 0);

      // Limpiamos todas las variables
      this.canvasTarget = null;
      this.virtualCanvas = null;
      this.xOrigen = null;
      this.yOrigen = null;
      this.xDestino = null;
      this.yDestino = null;
      this.colorLienzo = null;
      this.tamanoLienzo = null;
    }

    return this;
  };


  /**
   * Metodo que permite dibujar una cuadricula en un canvas
   * @method Render.dibujarCuadricula()
   * @param {string} nombreCanvas - Nombre o identificador del canvas en el que se desea dibujar.
   * @param {object} elemento - Elemento a dibujar
   */

  Render.prototype.dibujarAlgo = function(){
    this.virtualCanvas = this.canvasVirtual();
    // var prop = elemento.propiedades;

    this.virtualCanvas.width = this.xDestino;
    this.virtualCanvas.height = this.yDestino;

    var contexto = this.virtualCanvas.getContext('2d');

    // Dibujamos lineas horizontales
    for (var i = this.xOrigen; i <= this.yDestino; i += this.tamanoLienzo){
        contexto.moveTo(this.xOrigen, i);
        contexto.lineTo(this.xDestino, i);
    }

    // Dibujamos lineas verticales
    for (var i = this.yOrigen; i <= this.xDestino; i += this.tamanoLienzo){
        contexto.moveTo(i, this.yOrigen);
        contexto.lineTo(i, this.yDestino);
    }

    // Dibujamos de una sola vez las lineas
    contexto.strokeStyle = this.colorLienzo;
    contexto.stroke();

    // Renderizamos en elemento canvas destino
    // var destino = document.getElementById(nombreCanvas).getContext('2d');
    // destino.drawImage(canvas, 0, 0);

    // Evitamos referencias circulares
    // destino = null;
    // canvas = contexto = null;
    // prop = null;

    return this;
  };


  /**
   * Metodo que permite dibujar una cuadricula en un canvas
   * @method Render.dibujarCuadricula()
   * @param {string} nombreCanvas - Nombre o identificador del canvas en el que se desea dibujar.
   * @param {object} elemento - Elemento a dibujar
   */

  Render.prototype.dibujarCuadricula = function(nombreCanvas, elemento){
    var canvas = this.canvasVirtual();
    var prop = elemento.propiedades;

    canvas.width = prop.puntoDestino.x;
    canvas.height = prop.puntoDestino.y;

    var contexto = canvas.getContext('2d');

    // Dibujamos lineas horizontales
    for (var i = prop.puntoOrigen.x; i <= prop.puntoDestino.y; i += prop.tamano){
        contexto.moveTo(prop.puntoOrigen.x, i);
        contexto.lineTo(prop.puntoDestino.x, i);
    }

    // Dibujamos lineas verticales
    for (var i = prop.puntoOrigen.y; i <= prop.puntoDestino.x; i += prop.tamano){
        contexto.moveTo(i, prop.puntoOrigen.y);
        contexto.lineTo(i, prop.puntoDestino.y);
    }

    // Dibujamos de una sola vez las lineas
    contexto.strokeStyle = prop.color;
    contexto.stroke();

    // Renderizamos en elemento canvas destino
    var destino = document.getElementById(nombreCanvas).getContext('2d');
    destino.drawImage(canvas, 0, 0);

    // Evitamos referencias circulares
    destino = null;
    canvas = contexto = null;
    prop = null;

    return this;
  };

  /**
   * Metodo que permite dibujar lineas verticales en una area
   * @method Render.dibujarLineasVerticales()
   * @param {string} nombreCanvas - Nombre o identificador del canvas en el que se desea dibujar.
   * @param {object} elemento - Elemento a dibujar
   */
  Render.prototype.dibujarLineasVerticales = function(nombreCanvas, elemento){
    var canvas = this.canvasVirtual();
    var prop = elemento.propiedades;

    canvas.width = prop.puntoDestino.x;
    canvas.height = prop.puntoDestino.y;

    var contexto = canvas.getContext('2d');

    // Dibujamos lineas verticales
    for (var i = prop.puntoOrigen.y; i <= prop.puntoDestino.x; i += prop.tamano){
        contexto.moveTo(i, prop.puntoOrigen.y);
        contexto.lineTo(i, prop.puntoDestino.y);
    }

    // Dibujamos de una sola vez las lineas
    contexto.strokeStyle = prop.color;
    contexto.stroke();

    // Renderizamos en elemento canvas destino
    var destino = document.getElementById(nombreCanvas).getContext('2d');
    destino.drawImage(canvas, 0, 0);

    // Evitamos referencias circulares
    destino = null;
    canvas = contexto = null;
    prop = null;

    return this;
  };

  /**
   * Metodo que permite dibujar lineas horizontales en una area
   * @method Render.dibujarLineasHorizontales()
   * @param {string} nombreCanvas - Nombre o identificador del canvas en el que se desea dibujar.
   * @param {object} elemento - Elemento a dibujar
   */
  Render.prototype.dibujarLineasHorizontales = function(nombreCanvas, elemento){
    var canvas = this.canvasVirtual();
    var prop = elemento.propiedades;

    canvas.width = prop.puntoDestino.x;
    canvas.height = prop.puntoDestino.y;

    var contexto = canvas.getContext('2d');


    // Dibujamos lineas horizontales
    for (var i = prop.puntoOrigen.x; i <= prop.puntoDestino.y; i += prop.tamano){
        contexto.moveTo(prop.puntoOrigen.x, i);
        contexto.lineTo(prop.puntoDestino.x, i);
    }

    // Dibujamos de una sola vez las lineas
    contexto.strokeStyle = prop.color;
    contexto.stroke();

    // Renderizamos en elemento canvas destino
    var destino = document.getElementById(nombreCanvas).getContext('2d');
    destino.drawImage(canvas, 0, 0);

    // Evitamos referencias circulares
    destino = null;
    canvas = contexto = null;
    prop = null;

    return this;
  };

  /**
   * Metodo que permite dibujar un rectangulo en un canvas
   * @method Render.dibujarRectangulo()
   * @param {string} nombreCanvas - Nombre o identificador del canvas en el que se desea dibujar.
   * @param {object} elemento - Elemento a dibujar
   */
  Render.prototype.dibujarRectangulo = function(nombreCanvas, elemento){

    elemento = {
      tipo: 'rectangulo',
      propiedades: {
        tamano: 32,
        color: '#F2E',
        puntoOrigen: {
          x: 32,
          y: 32
        },
        puntoDestino: {
          x: 128,
          y: 128
        }
      }
    };

    var canvas = this.canvasVirtual();

    canvas.width = elemento.propiedades.puntoDestino.x;
    canvas.height = elemento.propiedades.puntoDestino.y;

    var contexto = canvas.getContext('2d');

    contexto.fillStyle = elemento.propiedades.color;
    contexto.fillRect(elemento.propiedades.puntoOrigen.x,
      elemento.propiedades.puntoOrigen.y,
      elemento.propiedades.puntoDestino.x,
      elemento.propiedades.puntoDestino.y
    );

    // Renderizamos en elemento canvas destino
    var destino = document.getElementById(nombreCanvas).getContext('2d');
    destino.drawImage(canvas, 0, 0);

    // Evitamos referencias circulares
    destino = null;
    canvas = contexto = null;

  };

  /**
   * Metodo que permite dibujar una linea en un canvas
   * @method Render.dibujarLinea()
   * @param {string} nombreCanvas - Nombre o identificador del canvas en el que se desea dibujar.
   * @param {object} elemento - Elemento a dibujar
   */
  Render.prototype.dibujarLinea = function(){};

  Render.prototype.canvasVirtual = function(){
    return document.createElement('canvas');
  };

  // Render.prototype.renderizar = function(){};

  Render.prototype.limpiar = function(nombreCanvas, coordenadas){
    var contexto = document.getElementById(nombreCanvas).getContext('2d');
    contexto.clearRect(coordenadas.origen.x, coordenadas.origen.y, coordenadas.destino.x, coordenadas.destino.y);

    contexto = null;
    return this;
  };

  /**
   * Metodo que permite dibujar una linea en un canvas
   * @method Render.dibujarLinea()
   * @param {string} nombreCanvas - Nombre o identificador del canvas en el que se desea dibujar.
   * @param {integer} grados - Grados a girar
   */
  Render.prototype.rotar = function(nombreCanvas, grados){
    var contexto = document.getElementById(nombreCanvas).getContext('2d');
    // Convertimos los grados a radianes
    contexto.rotate(grados*Math.PI/180);


    contexto = null;
    return this;
  };

  Render.prototype.guardarEstado = function(nombreCanvas){
    var contexto = document.getElementById(nombreCanvas).getContext('2d').save();
    // contexto = null;
    try {
      return contexto;
    } finally {
      contexto = null;
    }
  };

  Render.prototype.restaurarEstado = function(nombreCanvas){
    var contexto = document.getElementById(nombreCanvas).getContext('2d').restore();
    contexto = null;
    return this;
  };
