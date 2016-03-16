// app.js
// Carlos Linares
var renderizer;

function repaint(){
  window.requestAnimationFrame(repaint);
}

window.addEventListener('load', function(){
  renderizer = new Render()
  .dibujarLineasVerticales('fondo', {
    tipo: 'cuadricula',
    propiedades: {
      tamano: 4,
      color: '#F2E',
      puntoOrigen: {
        x: 0,
        y: 0
      },
      puntoDestino: {
        x: 640,
        y: 480
      }
    }
  })
  .rotar('frente', 3)
  .dibujarLineasVerticales('frente', {
    tipo: 'cuadricula',
    propiedades: {
      tamano: 4,
      color: '#F2E',
      puntoOrigen: {
        x: 0,
        y: 0
      },
      puntoDestino: {
        x: 640,
        y: 480
      }
    }
  });

  repaint();
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
