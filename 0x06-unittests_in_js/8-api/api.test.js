const expect = require('chai').expect;
const request = require('request');

describe("Integration Test", function() {
  describe("GET /", function() {
    it("Test Index Page status", function(done) {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };
      request(options, function(err, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
});
