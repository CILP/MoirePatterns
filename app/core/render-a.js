// render-a.js
// Carlos Linares

// Cualquier trazo que se realice al canvas
// es necesario renderizarlo con Render.renderizar();

/**
 * Objeto que representa los metodos y propiedades para
 * renderizar elementos en el canvas.
 * @constructor
 * @param {object} config - Configuracion inicial del objeto renderizador.
 */
function Render(){
  this._origen = null;
  this._destino = null;
  this._color = null;
  this._canvas = null;
  this._virtual = null;
  this._tamano = null;
}

/**
 * Metodo que regresa un nuevo elemento canvas virtual
 * @method Render.canvasVirtual()
 * @return {object} Nuevo canvas
 */
Render.prototype.canvasVirtual = function(){
  return document.createElement('canvas');
};

/**
 * Metodo que setea el origen (X, Y) de un trazo
 * @method Render.origen()
 * @param {object} o - Objeto como el siguiente {x: 0, y: 0}
 */
Render.prototype.origen = function(o){
  this._origen = o || { x: 0, y: 0};
  return this;
};

/**
 * Metodo que setea el destino (X, Y) de un trazo
 * @method Render.destino()
 * @param {object} d - Objeto como el siguiente {x: 0, y: 0}
 */
Render.prototype.destino = function(d){
  this._destino = d || { x: 0, y: 0};
  return this;
};

/**
 * Metodo que setea el color de un trazo
 * @method Render.color()
 * @param {string} c - Cadena en Hexadecimal que describe un color: '#F00'
 */
Render.prototype.color = function(c){
  this._color = c || "#C00";
  return this;
};

/**
 * Metodo que setea el nombre del canvas destino
 * @method Render.canvas()
 * @param {string} l - Nombre del canvas destino
 */
Render.prototype.canvas = function(l){
  this._canvas = l || null;
  return this;
};

/**
 * Metodo que setea el tamano del trazo (Sí aplica)
 * @method Render.tamano()
 * @param {integer} t - Por lo general en unidadades pares
 */
Render.prototype.tamano = function(t){
  this._tamano = t || 32;
  return this;
};

/**
 * Metodo que dibuja el trazo del canvas virtual en el canvas destino
 * @method Render.renderizar()
 */
Render.prototype.renderizar = function(){
  if (this._virtual){
    var canvas = document.getElementById(this._canvas).getContext('2d');
    canvas.drawImage(this._virtual, 0, 0);
    this.reset();
  }
  return this;
};

/**
 * Metodo que dibuja lineas horizontales en una area de un canvas virtual
 * @method Render.dibujarLineasHorizontales()
 */
Render.prototype.dibujarLineasHorizontales = function(){
  if (!this._virtual){
    this._virtual = this.canvasVirtual();
    this._virtual.width = this._destino.x;
    this._virtual.height = this._destino.y;
  }

  var contexto = this._virtual.getContext('2d');

  // Dibujamos lineas horizontales
  for (var i = this._origen.x; i <= this._destino.y; i += this._tamano){
      contexto.moveTo(this._origen.x, i);
      contexto.lineTo(this._destino.x, i);
  }

  // Dibujamos de una sola vez las lineas
  contexto.strokeStyle = this._color;
  contexto.stroke();

  contexto = null;
  return this;
};

/**
 * Metodo que dibuja lineas verticales en una area de un canvas virtual
 * @method Render.dibujarLineasVerticales()
 */
Render.prototype.dibujarLineasVerticales = function(){
  if (!this._virtual){
    this._virtual = this.canvasVirtual();
    this._virtual.width = this._destino.x;
    this._virtual.height = this._destino.y;
  }

  var contexto = this._virtual.getContext('2d');

  // Dibujamos lineas verticales
  for (var i = this._origen.y; i <= this._destino.x; i += this._tamano){
      contexto.moveTo(i, this._origen.y);
      contexto.lineTo(i, this._destino.y);
  }

  // Dibujamos de una sola vez las lineas
  contexto.strokeStyle = this._color;
  contexto.stroke();

  contexto = null;
  return this;
};

/**
 * Metodo que permite dibujar un rectangulo en el canvas virtual
 * @method Render.dibujarRectangulo()
 */
Render.prototype.dibujarRectangulo = function(){
  if (!this._virtual){
    this._virtual = this.canvasVirtual();
    this._virtual.width = this._destino.x;
    this._virtual.height = this._destino.y;
  }

  var contexto = this._virtual.getContext('2d');

  contexto.fillStyle = this._color;
  contexto.fillRect(this._origen.x, this._origen.y, this._destino.x, this._destino.y);

  contexto = null;
  return this;
};

/**
 * Metodo que permite rotar el canvas virtual
 * @method Render.dibujarLinea()
 * @param {integer} grados - Grados a girar
 */
Render.prototype.rotar = function(grados){
  if (!this._virtual){
    this._virtual = this.canvasVirtual();
    this._virtual.width = this._destino.x;
    this._virtual.height = this._destino.y;
  }

  var contexto = this._virtual.getContext('2d');

  // Convertimos los grados a radianes
  contexto.rotate(grados * Math.PI / 180);

  contexto = null;
  return this;
};

/**
 * Metodo que limpia el canvas (Transparencia)
 * @method Render.limpiar()
 */
Render.prototype.limpiar = function(){
  /*if (!this._virtual){
    this._virtual = this.canvasVirtual();
    this._virtual.width = this._destino.x;
    this._virtual.height = this._destino.y;
  }*/

  var canvas = document.getElementById(this._canvas);
  var contexto = canvas.getContext('2d');
  contexto.clearRect(this._origen.x, this._origen.y, this._destino.x, this._destino.y);

  canvas = null;
  contexto = null;
  return this;
};

/**
 * Metodo que re-setea las propiedades de Render
 * @method Render.reset()
 */
 Render.prototype.reset = function(){
   this._origen = null;
   this._destino = null;
   this._color = null;
   this._canvas = null;
   this._virtual = null;
   this._tamano = null;
 };

 /**
  * Metodo que dibuja los elementos de una escena
  * @method Render.reset()
  * @param {scene} escena - Escena a dibujar
  */
  Render.prototype.dibujarEscena = function(scene){
    if (scene){

      if (!this._virtual){
        this._virtual = this.canvasVirtual();
        this._virtual.width = scene.meshs[0].size.width;
        this._virtual.height = scene.meshs[0].size.height;
      }

      var contexto = this._virtual.getContext('2d');

      contexto.fillStyle = scene.meshs[0].material.color;
      contexto.fillRect(scene.meshs[0].origin.x,
        scene.meshs[0].origin.y,
        scene.meshs[0].destination.x,
        scene.meshs[0].destination.y);

      contexto = null;
      return this;
    }
  };
