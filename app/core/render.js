/**
 * Objeto que representa los metodos y propiedades para
 * renderizar elementos en el canvas.
 * @constructor
 * @param {object} config - Confihuracion inicial del objeto renderizador.
 */
function Render(){}

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

Render.prototype.renderizar = function(){};

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
