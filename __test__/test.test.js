const { add, subtract, divide, multiply } = require("../src/testFile");

describe("Math.js tests", () => {
  it("should test  add  ", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("Should test subtract", () => {
    expect(subtract(2, 2)).toBe(0);
  });
});