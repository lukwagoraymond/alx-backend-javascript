const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const expect = require('chai').expect;

describe("Test Suite with Hooks", function() {
  let consoleSpy;
  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });
  this.afterEach(function() {
    consoleSpy.restore();
  })

  it("test with 100 & 20", function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);
    expect(consoleSpy.calledOnce).to.be.true;
    
  });
  it("test with 10 & 10", function() {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWithExactly('The total is: 20')).to.equal(true);
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
