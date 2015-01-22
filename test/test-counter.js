var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('./../MultiDimensionalArray.js');

var sample_array = [1,0,0,1,0,0,0,0,1];  

describe('The count function should exist', function()
  {
    it('and it should be a function huehuehue', function() 
      {
        expect(mda.count).to.exist();
        expect(mda.count).to.be.a('function');
      });
  });

describe('given a sample paramenter 3 that generates 3 elements', function()
  {
    it('should return the number of true boolean values', function() 
      {
        var resultcount = mda.count(sample_array);
        expect(resultcount).to.equal(3);
      });
  });