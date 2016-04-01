// mesh.controller.js
// Carlos Linares

Mesh.prototype.setOrigin = function(origin){
  if (origin){
    this.origin = origin;
  } else {
    throw "NullPointerException: Param origin";
  }
  return this;
};

Mesh.prototype.setDestination = function(destination){
  if (destination){
    this.destination = destination;
  } else {
    throw "NullPointerException: Param destination";
  }
  return this;
};

Mesh.prototype.setSize = function(size){
  if (size){
    this.size = size;
  } else {
    throw "NullPointerException: Param size";
  }
  return this;
};

Mesh.prototype.setShape = function(shape){
  if (shape){
    this.shape = shape;
  } else {
    throw "NullPointerException: Mesh.setShape shape param.";
  }
  return this;
};

Mesh.prototype.setMaterial = function(material){
  if (material){
    this.material = material;
  } else {
    throw "NullPointerException: Mesh.addMaterial material param.";
  }
  return this;
};

Mesh.prototype.searchQuadrant = function(quadrant){
  if (!this.quadrants){
    this.getQuadrants();
  }

  for (var i = 0; i !== this.quadrants.length; i++){
    if (this.quadrants[i].type === quadrant){
      return JSON.parse(JSON.stringify(this.quadrants[i]));
    }
  }
};

Mesh.prototype.getQuadrants = function(){
  // We divide the size and obtain the quadrants
  // TODO:
  // We could add parallelograms instead of quadrants Objects
  // Top quadrants:
  this.quadrants.push({
    type: "A",
    size: {
      height: this.size.height / 2,
      width: this.size.width / 2
    },
    origin: {
      x: this.size.width / 2,
      y: 0
    },
    destination: {
      x: this.size.width,
      y: this.size.height / 2
    }
  });
  this.quadrants.push({
    type: "B",
    size: {
      height: this.size.height / 2,
      width: this.size.width / 2
    },
    origin: {
      x: 0,
      y: 0
    },
    destination: {
      x: this.size.width / 2,
      y: this.size.height / 2
    }
  });

  // Bottom quadrants
  this.quadrants.push({
    type: "C",
    size: {
      height: this.size.height / 2,
      width: this.size.width / 2
    },
    origin: {
      x: 0,
      y: this.size.height / 2
    },
    destination: {
      x: this.size.width / 2,
      y: this.size.height
    }
  });
  this.quadrants.push({
    type: "D",
    size: {
      height: this.size.height / 2,
      width: this.size.width / 2
    },
    origin: {
      x: this.size.width / 2,
      y: this.size.height / 2
    },
    destination: {
      x: this.size.width,
      y: this.size.height
    }
  });
  return this;
};


// TODO
// Funciona para saber si es haxadecimal o no un color
