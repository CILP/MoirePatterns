// parallelogram.controller.js
// Carlos Linares

// Methods
Parallelogram.prototype.getArea = function(){
  if (this.base && this.height){
    return this.base * this.height;
  } else {
    throw "NullPointerException: Parallelogram.base and/or Parallelogram.height";
  }
};

Parallelogram.prototype.getPerimeter = function(){
  if (this.base && this.height){
    return ((this.base * 2) + (this.height * 2));
  } else {
    throw "NullPointerException: Parallelogram.base and/or Parallelogram.height";
  }
};

Parallelogram.prototype.setSize = function(b, h){
  this.base = b || 32;
  this.height = h || 16;
};

Parallelogram.prototype.setSymmetric = function(){
  // If Parallelogram.base and Parallelogram.height are equals, then
  // the Parallelogram is a square or a rhomb and, it has 4 axis of symmetric.
  // If Parallelogram.base and Parallelogram.height are different, then
  // the Parallelogram is a Rectangle or a Rhomboid and, it has 2 axis of symmetric
  // Consult: https://en.wikipedia.org/wiki/Parallelogram
  if (this.base && this.height){
    if (this.base === this.height){
      this.type = "Square";
      this.axisSymmetric = 4;
    } else if (this.base !== this.height){
      this.type = "Rectangle";
      this.axisSymmetric = 2;
    }
  } else {
    throw "NullPointerException: Parallelogram.base and/or Parallelogram.height";
  }
};
