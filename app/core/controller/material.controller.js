// material.controller.js
// Carlos Linares

Material.prototype.setColor = function (color){
    this.color = color || Math.random() * 0xffffff;
};
