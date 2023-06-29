const maxInts = require("./index");

test("returns correctly when first is largest", () => {
  expect(maxInts([2, 4, -2, 1])).toEqual(6);
});

test("returns correctly when last is largest", () => {
  expect(maxInts([2, 4, -2, 7])).toEqual(11);
});

test("returns null if array has less than 2 numbers", () => {
  expect(maxInts([1])).toEqual(null);
});
