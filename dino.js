const Dino = function(species, diet, visitors){
this.species = species
this.diet = diet
this.visitors = []

}

Dino.prototype.species = function(){
  return this.species;
}

Dino.prototype.diet = function(){
return this.diet

}

Dino.prototype.visitors =function(){
return this.visitors.lenght

}


module.exports = Dino
