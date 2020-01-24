var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('can add 2 numbers', function(){
    calculator.previousTotal = '4'
    calculator.add(1)
    assert.equal(calculator.runningTotal, 5)
  })

  //it should be able to subtract 4 from 7 and get 3
  it('can subtract 2 numbers', function(){
    calculator.previousTotal = '7'
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  //it should be able to multiply 3 by 5 and get 15
  it('can mutiply 2 numbers', function(){
    calculator.previousTotal = '3'
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  //it should be able to divide 21 by 7 and get 3
  it('can divide 2 numbers', function(){
    calculator.previousTotal = '21'
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  //it should be able to concatenate multiple number button clicks
  it('can concatonate 3 numbers', function(){
    calculator.numberClick(1)
    calculator.numberClick(1)
    calculator.numberClick(7)
    assert.equal(calculator.runningTotal, 117)
  })

  //it should be able to chain multiple operations together
  it('can chain multiple operators', function(){
    calculator.numberClick(6)
    calculator.operatorClick('+')
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('/')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 8)
  })

  //it should be able to clear the running total without affecting the calculation
  it('can clear the running total', function(){
    calculator.numberClick(9)
    calculator.numberClick(4)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.clearClick()
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 0);
  })

});
