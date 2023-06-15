const expect = require('chai').expect;
const request = require('request');

describe("Integration Test", function() {
  describe("GET /", function() {
    it("Test Index Page status", function(done) {
      this.timeout(0);
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };
      request(options, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/123', function() {
    it("Responds with 200 & id 123", function(done) {
      this.timeout(0);
      const options = {
        url: 'http://localhost:7865/cart/123',
        method: 'GET',
      };
      request(options, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });
  });

  describe('GET /cart/3', function() {
    it("Responds with 200 & id 3", function(done) {
      this.timeout(0);
      const options = {
        url: 'http://localhost:7865/cart/3',
        method: 'GET',
      };
      request(options, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 3');
        done();
      });
    });
  });

  describe('GET /cart/a43', function() {
    it("Responds with 200 & id a43", function(done) {
      this.timeout(0);
      const options = {
        url: 'http://localhost:7865/cart/a43',
        method: 'GET',
      };
      request(options, function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/string', function() {
    it("Responds with 200 & id string", function(done) {
      this.timeout(0);
      const options = {
        url: 'http://localhost:7865/cart/string',
        method: 'GET',
      };
      request(options, function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/', function() {
    it("Responds with 200 & no id", function(done) {
      this.timeout(0);
      const options = {
        url: 'http://localhost:7865/cart/',
        method: 'GET',
      };
      request(options, function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments/ JSON String', function() {
    it("Responds with 200 & correct JSON string", function(done) {
      this.timeout(0);
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };
      request(options, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.be.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}');
        done();
      });
    });
  });

  describe('GET /available_payments/ JSON Obj', function() {
    it("Responds with 200 & correct JSON Object", function(done) {
      this.timeout(0);
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };
      request(options, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        const jsonParsed = JSON.parse(body);

        const refBody = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };
        expect(jsonParsed).to.deep.include(refBody);
        done();
      });
    });
  });

  describe('POST /login with input', function() {
    it("Responds with 200 & correct Raymond", function(done) {
      this.timeout(0);
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: {
          userName: 'Raymond',
        },
      };
      request(options, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.be.equal('Welcome Raymond');
        done();
      });
    });
  });

  describe('POST /login with no input', function() {
    it("Responds with 200 & undefined", function(done) {
      this.timeout(0);
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
      };
      request(options, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.be.equal('Welcome undefined');
        done();
      });
    });
  });
});
