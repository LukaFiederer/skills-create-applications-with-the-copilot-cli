const { add, subtract, multiply, divide, modulo, power, squareRoot, runCli } = require('../calculator');

describe('calculator basic operations', () => {
  test('addition works for image example 2 + 3', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtraction works for image example 10 - 4', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplication works for image example 45 * 2', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('division works for image example 20 / 5', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('addition supports multiple numbers', () => {
    expect(add(1, 2, 3, 4)).toBe(10);
  });

  test('multiplication supports multiple numbers', () => {
    expect(multiply(2, 3, 4)).toBe(24);
  });

  test('division throws on divide by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('modulo returns remainder', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('power returns exponentiation result', () => {
    expect(power(2, 4)).toBe(16);
  });

  test('squareRoot returns square root', () => {
    expect(squareRoot(81)).toBe(9);
  });

  test('squareRoot throws on negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of negative number is not allowed');
  });

  test('modulo throws on zero divisor', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero');
  });
});

describe('calculator CLI runner', () => {
  test('runCli supports add', () => {
    expect(runCli(['add', '4', '5'])).toBe(9);
  });

  test('runCli supports subtract', () => {
    expect(runCli(['subtract', '10', '3'])).toBe(7);
  });

  test('runCli supports multiply', () => {
    expect(runCli(['multiply', '6', '7'])).toBe(42);
  });

  test('runCli supports divide', () => {
    expect(runCli(['divide', '12', '3'])).toBe(4);
  });

  test('runCli supports modulo with 5 % 2', () => {
    expect(runCli(['modulo', '5', '2'])).toBe(1);
  });

  test('runCli supports power with 2 ^ 3', () => {
    expect(runCli(['power', '2', '3'])).toBe(8);
  });

  test('runCli supports squareRoot with √16', () => {
    expect(runCli(['squareRoot', '16'])).toBe(4);
  });

  test('runCli squareRoot rejects negative numbers', () => {
    expect(() => runCli(['squareRoot', '-16'])).toThrow('Square root of negative number is not allowed');
  });

  test('runCli rejects unsupported operation', () => {
    expect(() => runCli(['unknown', '5', '2'])).toThrow('Unsupported operation: unknown');
  });

  test('runCli rejects invalid number input', () => {
    expect(() => runCli(['add', 'abc', '5'])).toThrow('Invalid number: abc');
  });

  test('runCli throws when no operation is provided', () => {
    expect(() => runCli([])).toThrow('Usage:');
  });
});
