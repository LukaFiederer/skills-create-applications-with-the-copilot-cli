#!/usr/bin/env node

/**
 * Supported operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
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

function parseNumber(value) {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return parsed;
}

function runCli(args) {
  const [operation, ...rawNumbers] = args;

  if (!operation || rawNumbers.length < 2) {
    throw new Error('Usage: node src/calculator.js <add|subtract|multiply|divide> <num1> <num2> [num3 ...]');
  }

  const numbers = rawNumbers.map(parseNumber);

  switch (operation) {
    case 'add':
      return add(...numbers);
    case 'subtract':
      if (numbers.length !== 2) {
        throw new Error('Subtraction requires exactly 2 numbers');
      }
      return subtract(numbers[0], numbers[1]);
    case 'multiply':
      return multiply(...numbers);
    case 'divide':
      if (numbers.length !== 2) {
        throw new Error('Division requires exactly 2 numbers');
      }
      return divide(numbers[0], numbers[1]);
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
  runCli,
};
