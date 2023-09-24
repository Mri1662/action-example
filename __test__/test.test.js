const { add, subtract, divide, multiply } = require("../src/testFile");

describe("Math.js tests", () => {
  it("should test  add  ", () => {
    expect(add(5, 5)).toBe(10);
  });

  it("Should test subtract", () => {
    expect(subtract(10, 5)).toBe(5);
  });
});