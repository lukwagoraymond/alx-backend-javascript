const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const expect = require('chai').expect;

describe("sendPaymentRequestToApi", function() {
  it('Tests Util.calculateNumber stub', function() {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    const consoleSpy = sinon.spy(console, 'log');
    const a = 100, b = 20;
    const results = sendPaymentRequestToApi(a, b);
    expect(consoleSpy.calledWithExactly('The total is: 10')).to.equal(true);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(stub.withArgs('SUM', a, b).calledOnce).to.be.true;
    expect(console.log(`The total is: ${Utils.calculateNumber('SUM', a, b)}`)).to.equal(results);
    stub.restore();
    consoleSpy.restore();
  });
});
