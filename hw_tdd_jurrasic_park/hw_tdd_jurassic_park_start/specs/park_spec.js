const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dino1;
  let dino2;
  let dino3;
  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park('Jurassic Park' , 100 );

  });

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs' , function (){
    const actual = [];
    assert.deepStrictEqual(park.dinosaurs, actual);
  });

  it('should be able to add a dinosaur to its collection' , function (){
    park.addDino(dino1);
    const expected = [dino1];
    assert.deepStrictEqual(park.dinosaurs, expected);
  });

  // it('should be able to remove a dinosaur from its collection' , function (){
  //   park.addDino(dino1);
  //   park.addDino(dino2);
  //   park.removeDino();
  //   const expected = [dino1, dino2];
  //   assert.strictEqual(park.dinosaurs, expected);
  // });

  // it('should be able to find the dinosaur that attracts the most visitors');
  // let popularDino = dinosaur.mostPopular;
  // for (const dinosaur of this.dinosaur) {
  //   if (dinosaur === popularDino){
  //     return
  //   }
  // }
  // it('should be able to find all dinosaurs of a particular species');

  // it('should be able to calculate the total number of visitors per day');

  // it('should be able to calculate the total number of visitors per year');

  // it('should be able to calculate total revenue for one year');

});
