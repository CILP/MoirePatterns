// app.js
// Carlos Linares
var renderizer;

function repaint(){
  // window.requestAnimationFrame(repaint);
}

window.addEventListener('load', function(){
  renderizer = new Render();
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
            .renderizar();
}, false);

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
