const assert = require('assert')
const dino = require('../dino.js')


describe ('Dino', function(){

  let dino;

  beforeEach(function(){
    dino = new Dino('Velociraptor', 'carnivore', [])
  });

  it ('should have a species', function(){
    const actual = dino.name
    assert.strictEqual(actual, 'Velociraptor')


  });


  it (' should have a diet', function(){
    const actual = dino.diet
    assert.strictEqual(actual,'carnivore')


  });


  it (' should have An average number of visitors attracted per day', function(){
      const actual = dino.visitors
      assert.StrictEqual(actual, [])

  });

});
