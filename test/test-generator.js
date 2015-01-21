var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require('./../MultiDimensionalArray.js');

describe('something', function() {
  it('should do something', function() {
    var something = 'some value';
    expect(something).to.be.a('string');
    something.should.equal('some value');
  });
});

describe('calling with no arguments', function(){
  it('should return an array with 3 random boolean values in it', function() {
//    var values = [[1,1,1],[1,1,1],[1,1,1]];
    var values = mda.generator();
    expect(values).to.be.an('array');
    expect(result).to.have.length(3);

    result.forEach(function (innerArray){
      innerArray.forEach(function (innerValue){
          expect(innerValue).to.satisfy(function (number){
            return number < 2;
          });
      });
    });
  });
});

/*describe('this shit', function(){
  it('will do this', function() {
    var foo = {bar: 'baz'};
    //expect(foo).to.deep.equal({ bar: 'baz' });
    expect({ foo: { bar: { baz: 'quux' } } }).to.have.deep.property('foo.bar.baz', 'quux');
  });
});
*/

