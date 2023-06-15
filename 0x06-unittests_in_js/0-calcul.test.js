const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe("Test calculateNumber Function", function() {
  it("Tests sum of whole numbers", function() {
    const test1 = calculateNumber(2, 2);
    assert.strictEqual(test1, 4);
  });
  it("Test sum of one float number", function() {
    const test2 = calculateNumber(2, 3.4);
    assert.strictEqual(test2, 5);
  });
  it("Test sum of both float numbers", function() {
    const test3 = calculateNumber(2.3, 3.5);
    assert.strictEqual(test3, 6);
  });
  it("Tests sum of both float numbers", function() {
    const test4 = calculateNumber(2.1, 2.3);
    assert.strictEqual(test4, 4);
  });
  it("Tests sum when one number negative", function() {
    const test5 = calculateNumber(2, -3);
    assert.strictEqual(test5, -1);
  });
  it("Test sum with both negative numbers", function() {
    const test6 = calculateNumber(-2, -3);
    assert.strictEqual(test6, -5);
  });
  it("Tests sum when one negative float", function() {
    const test7 = calculateNumber(-2.4, 5);
    assert.strictEqual(test7, 3);
  });
  it("Tests sum both negative float numbers", function() {
    const test8 = calculateNumber(-2.5, -4.5);
    assert.strictEqual(test8, -6);
  });
});
