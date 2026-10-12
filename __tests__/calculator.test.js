const { divide } = require("../src/calculator.js");

test("valid division works", () => {
  expect(divide(10, 2)).toBe(5);
});

test("throws when a is not a number", () => {
  expect(() => divide("a", 2)).toThrow(TypeError);
});

test("throws when b is not a number", () => {
  expect(() => divide(2, "b")).toThrow(TypeError);
});

test("throws when arguments are NaN", () => {
  expect(() => divide(NaN, 2)).toThrow(TypeError);
});

test("throws on division by zero", () => {
  expect(() => divide(10, 0)).toThrow(RangeError);
});
