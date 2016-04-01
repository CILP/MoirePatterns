// app.js
// Carlos Linares
var scene;
var player;

function repaint(){
  // window.requestAnimationFrame(repaint);
}

window.addEventListener('load', function(){
  renderizer = new Render();
  scene = new Scene();

  var material = new Material();
  material.setColor(null);

  var malla = new Mesh();
  malla.setSize({height: 480, width: 640})
       .getQuadrants()
       .setShape({})
       .setMaterial(material)
       .setOrigin({x: malla.searchQuadrant("A").origin.x, y: malla.searchQuadrant("A").origin.y})
       .setDestination({x: malla.searchQuadrant("A").destination.x, y: malla.searchQuadrant("A").destination.y});
       // .setOrigin({x: malla.quadrants[1].origin.x, y: malla.quadrants[1].origin.y})
       // .setDestination({x: malla.quadrants[2].destination.x, y: malla.quadrants[2].destination.y});


  scene.addMesh(malla);


  renderizer.canvas("fondo")
            .dibujarEscena(scene)
            .renderizar();


  // repaint();

}, false);

document.onmousemove = function(e){
  // console.info({x: e.pageX, y: e.pageY});
  /*player.origen.x = e.pageX;
  player.origen.y = e.pageY;
  player.destino.x = e.pageX + 30;
  player.destino.y = e.pageY + 30;*/
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
