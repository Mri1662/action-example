const { add, subtract, divide, multiply } = require("../src/testFile");

describe("Math.js tests", () => {
  it("should test  add  ", () => {
    expect(add(5, 5)).toBe(10);
  });

  it("Should test subtract", () => {
    expect(subtract(10, 5)).toBe(5);
  });

  it("Should test divide", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("Should test multiply", () => {
    expect(multiply(5, 5)).toBe(25);
  });
});