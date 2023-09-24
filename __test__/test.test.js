<<<<<<< HEAD
const { add, subtract } = require("../src/testFile");

describe("Math.js tests", () => {
  it("should test  add  ", () => {
    expect(add(5, 5)).toBe(10);
  });

  it("Should test subtract", () => {
    expect(subtract(10, 5)).toBe(5);
=======
const { add, subtract, divide, multiply } = require("../src/testFile");

describe("Math.js tests", () => {
  it("should test  add  ", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("Should test subtract", () => {
    expect(subtract(2, 2)).toBe(0);
>>>>>>> d9d4b86d33c6d2a3541e2332a566acbd6c583628
  });
});