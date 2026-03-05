#!/usr/bin/env node

/**
 * Supported operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power
 * - squareRoot
 */

function add(...values) {
  return values.reduce((total, value) => total + value, 0);
}

function subtract(a, b) {
  return a - b;
}

function multiply(...values) {
  return values.reduce((total, value) => total * value, 1);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number is not allowed');
  }
  return Math.sqrt(n);
}

function parseNumber(value) {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return parsed;
}

function runCli(args) {
  const [operation, ...rawNumbers] = args;

  if (!operation) {
    throw new Error('Usage: node src/calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <num1> <num2> [num3 ...]');
  }

  const numbers = rawNumbers.map(parseNumber);

  switch (operation) {
    case 'add':
      if (numbers.length < 2) {
        throw new Error('Addition requires at least 2 numbers');
      }
      return add(...numbers);
    case 'subtract':
      if (numbers.length !== 2) {
        throw new Error('Subtraction requires exactly 2 numbers');
      }
      return subtract(numbers[0], numbers[1]);
    case 'multiply':
      if (numbers.length < 2) {
        throw new Error('Multiplication requires at least 2 numbers');
      }
      return multiply(...numbers);
    case 'divide':
      if (numbers.length !== 2) {
        throw new Error('Division requires exactly 2 numbers');
      }
      return divide(numbers[0], numbers[1]);
    case 'modulo':
      if (numbers.length !== 2) {
        throw new Error('Modulo requires exactly 2 numbers');
      }
      return modulo(numbers[0], numbers[1]);
    case 'power':
      if (numbers.length !== 2) {
        throw new Error('Power requires exactly 2 numbers');
      }
      return power(numbers[0], numbers[1]);
    case 'squareRoot':
      if (numbers.length !== 1) {
        throw new Error('Square root requires exactly 1 number');
      }
      return squareRoot(numbers[0]);
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}

if (require.main === module) {
  try {
    const result = runCli(process.argv.slice(2));
    console.log(result);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  runCli,
};
