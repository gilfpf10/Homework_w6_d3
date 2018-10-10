const assert = require('assert')
const Park = require('../park.js')


describe('Park', function(){

  let park;

  beforeEach(function(){
    park = new Park('jurassic', [], [])
  });


  it ('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, 'jurassic')

  });


  it ('should have a ticket price', function(){
    const actual = park.price
    assert.strictEqual(actual, 0)

  });

  it ('should have a  collection of dinosaurs', function(){
    const actual = park.dinosaurs
    assert.strictEqual(actual, 0)
  });

  it ('should Add a dinosaur to its collection of dinosaurs', function(){
    park.adddinosaurs('t-rex')
    const actual = park.adddinosaurs();
    assert.strictEqual(actual,1)

  });


  xit ('should Remove a dinosaur from its collection of dinosaurs', function(){


  });

  xit( 'should Find the dinosaur that attracts the most visitors', function(){


  });


  xit( 'should Find all dinosaurs of a particular species', function(){


  });


  xit ( 'should Calculate the total number of visitors per day', function(){


  });

  xit ('should Calculate the total number of visitors per year', function(){

  });

  xit ('should Calculate the total revenue from ticket sales for one year', function(){




  });
});
