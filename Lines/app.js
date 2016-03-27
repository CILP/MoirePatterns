// app.js
// Carlos Linares
var renderizer;
var player;

function repaint(){
  window.requestAnimationFrame(repaint);

  renderizer.canvas("frente")
            .origen({x: 0, y: 0})
            .destino({x: 640, y: 480})
            .limpiar();

  renderizer.canvas("frente")
            .origen(player.origen)
            .destino(player.destino)
            .color(null)
            .dibujarRectangulo()
            .renderizar();
}

window.addEventListener('load', function(){
  renderizer = new Render();
  /*
  renderizer.canvas("fondo")
            .origen({x:0, y:0})
            .destino({x:640, y:480})
            .color(null)
            .tamano(4)
            .dibujarLineasVerticales()
            .renderizar();

  renderizer.canvas("frente")
            .origen({x:0, y:0})
            .destino({x:640, y:480})
            .rotar(5)
            .color(null)
            .tamano(4)
            .dibujarLineasVerticales()
            .renderizar();*/

  // Dibujamos al jugador
  player = {origen: {x: 0, y: 0}, destino: {x: 30, y: 30}};

  renderizer.canvas("frente")
            .origen({x: 0, y: 0})
            .destino({x: 30, y: 30})
            .color(null)
            .dibujarRectangulo()
            .renderizar();

  repaint();

}, false);

document.onmousemove = function(e){
  // console.info({x: e.pageX, y: e.pageY});
  player.origen.x = e.pageX;
  player.origen.y = e.pageY;
  player.destino.x = e.pageX + 30;
  player.destino.y = e.pageY + 30;
};

document.onmouseup = function(e){
  e = e || window.event;
  var boton = e.which || e.button;
  return (boton == 1);
};

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 17);
    };
}());
