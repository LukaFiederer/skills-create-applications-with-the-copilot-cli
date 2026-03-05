const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require("../calculator");

// addition tests
describe("addition", () => {
  it("adds two positive numbers", () => {
    assert.equal(addition(2, 3), 5);
  });

  it("adds a positive and a negative number", () => {
    assert.equal(addition(5, -3), 2);
  });

  it("adds two negative numbers", () => {
    assert.equal(addition(-4, -6), -10);
  });

  it("adds zero to a number", () => {
    assert.equal(addition(7, 0), 7);
  });
});

// subtraction tests
describe("subtraction", () => {
  it("subtracts two positive numbers", () => {
    assert.equal(subtraction(10, 4), 6);
  });

  it("subtracts a larger number from a smaller one", () => {
    assert.equal(subtraction(3, 7), -4);
  });

  it("subtracts zero", () => {
    assert.equal(subtraction(5, 0), 5);
  });
});

// multiplication tests
describe("multiplication", () => {
  it("multiplies two positive numbers", () => {
    assert.equal(multiplication(3, 4), 12);
  });

  it("multiplies by zero", () => {
    assert.equal(multiplication(5, 0), 0);
  });

  it("multiplies two negative numbers", () => {
    assert.equal(multiplication(-3, -4), 12);
  });

  it("multiplies a positive and a negative number", () => {
    assert.equal(multiplication(3, -4), -12);
  });
});

// division tests
describe("division", () => {
  it("divides two positive numbers", () => {
    assert.equal(division(10, 2), 5);
  });

  it("divides to produce a decimal", () => {
    assert.equal(division(7, 2), 3.5);
  });

  it("throws an error when dividing by zero", () => {
    assert.throws(() => division(5, 0), /Division by zero/);
  });
});

// modulo tests
describe("modulo", () => {
  it("returns the remainder of a division", () => {
    assert.equal(modulo(10, 3), 1);
  });

  it("returns zero when evenly divisible", () => {
    assert.equal(modulo(9, 3), 0);
  });

  it("works with negative dividends", () => {
    assert.equal(modulo(-10, 3), -1);
  });

  it("throws an error when modulo by zero", () => {
    assert.throws(() => modulo(5, 0), /Modulo by zero/);
  });
});

// power (exponentiation) tests
describe("power", () => {
  it("raises a number to a positive exponent", () => {
    assert.equal(power(2, 10), 1024);
  });

  it("raises a number to the power of zero", () => {
    assert.equal(power(5, 0), 1);
  });

  it("raises a number to a negative exponent", () => {
    assert.equal(power(2, -1), 0.5);
  });

  it("raises zero to a positive power", () => {
    assert.equal(power(0, 5), 0);
  });
});

// squareRoot tests
describe("squareRoot", () => {
  it("returns the square root of a positive number", () => {
    assert.equal(squareRoot(9), 3);
  });

  it("returns the square root of zero", () => {
    assert.equal(squareRoot(0), 0);
  });

  it("returns a decimal square root", () => {
    assert.equal(squareRoot(2), Math.sqrt(2));
  });

  it("throws an error for a negative number", () => {
    assert.throws(() => squareRoot(-1), /negative number/);
  });
});
