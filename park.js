const Park = function(name, price, dinosaurs){
  this.name = name
  this.price = price
  this.dinosaurs = dinosaurs

}
Park.prototype.name = function(){
  return this.name;

}

Park.prototype.price = function(){
  return this.price.length;

}

Park.prototype.dinosaurs = function(){
  return this.dinosaurs.length;

}

Park.prototype.adddinosaurs = function(){
this.dinosaurs.push(name);

}




module.exports = Park
