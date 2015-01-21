var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('./../MultiDimensionalArray.js');

/*describe('something', function() {
  it('should do something', function() {
    var something = 'some value';
    expect(something).to.be.a('string');
    something.should.equal('some value');
  });
});*/

// GENERATOR 1

describe('The generate_1d function should exist', function()
  {
    it('and it should be a function huehuehue', function() 
      {
        expect(mda.generate_1d).to.exist();
        expect(mda.generate_1d).to.be.an('function');
      });
  });

describe('calling with no arguments', function()
  {
    it('should return an array with 3 random boolean values in it', function() 
      {
        expect(mda.generate_1d()).to.be.an('array');
        expect(mda.generate_1d()).to.have.length(3);
      });
  });

describe('calling with one argument 4', function(){
  it('should return an array with 4 random boolean values in it', function() 
  {
    expect(mda.generate_1d(4)).to.be.an('array');
    expect(mda.generate_1d(4)).to.have.length(4);
  });
});

describe('calling with an argument "potato"', function(){
  it('should return an empty array', function() 
  {
    expect(mda.generate_1d('potato')).to.be.an('array');
    expect(mda.generate_1d('potato')).to.be.empty();
  });
});

// GENERATOR 2

/*describe('calling with no arguments', function(){
  it('should return an array with 3 random boolean values in it', function() {
//    var values = [[1,1,1],[1,1,1],[1,1,1]];
    var values = mda.generate_1d();
    expect(values).to.be.an('array');
    expect(values).to.have.length(3);

    result.forEach(function (innerArray){
      innerArray.forEach(function (innerValue){
          expect(innerValue).to.satisfy(function (number){
            return number < 2;
          });
      });
    });
  });
});*/

describe('The function generate_2d should exist', function()
  {
    it('should be a function', function() 
      {
        expect(mda.generate_2d).to.exist();
        expect(mda.generate_2d).to.be.an('function');
      });
  });

describe('calling with no arguments', function()
  {
    it('should return an array with 3 random boolean values in it', function() 
      {
        expect(mda.generate_1d()).to.be.an('array');
        expect(mda.generate_1d()).to.have.length(3);
      });
  });

describe('calling with one argument 4', function(){
  it('should return an array with 4 random boolean values in it', function() 
  {
    expect(mda.generate_1d(4)).to.be.an('array');
    expect(mda.generate_1d(4)).to.have.length(4);
  });
});

describe('calling with an argument "potato"', function(){
  it('should return an empty array', function() 
  {
    expect(mda.generate_1d('potato')).to.be.an('array');
    expect(mda.generate_1d('potato')).to.be.empty();
  });
});
