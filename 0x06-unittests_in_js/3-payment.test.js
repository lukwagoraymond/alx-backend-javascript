const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const expect = require('chai').expect;

describe("sendPaymentRequestToApi", function() {
  it('Tests Util.calculateNumber used', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');
    const a = 100, b = 20;
    const result = sendPaymentRequestToApi(a, b);
    
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(spy.withArgs('SUM', a, b).calledOnce).to.be.true;
    expect(spy.calledWith('SUM', a, b)).to.be.true;
    expect(console.log(`The total is: ${Utils.calculateNumber('SUM', a, b)}`)).to.equal(result);
    spy.restore();
    consoleSpy.restore();
  });
});
