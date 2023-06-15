const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');
const sinon = require('sinon');

describe("getPaymentTokenFromAPI", function() {
  it("Test getPaymentTokenFromAPI(true)", function(done) {
    this.timeout(0);
    getPaymentTokenFromAPI(true).then(function(result) {
      expect(result).to.include({ data: 'Successful response from the API' });
      expect(result.data).to.equal('Successful response from the API');
      done();
    }).catch(done);
  });
});
