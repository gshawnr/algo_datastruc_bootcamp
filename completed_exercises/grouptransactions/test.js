const groupTransactions = require("./index");

test("groupTransactions function is defined", () => {
  expect(typeof groupTransactions).toEqual("function");
});

test("returns empty array for empty input", () => {
  expect(groupTransactions([])).toEqual([]);
});

test("calculates the correct output for 1", () => {
  expect(groupTransactions(["first"])).toEqual(["first 1"]);
});

test("calculates correct output for duplicate", () => {
  expect(groupTransactions(["first", "second", "first"])).toEqual([
    "first 2",
    "second 1",
  ]);
});

test("calculates correct for duplicates with transaction order", () => {
  expect(
    groupTransactions(["second", "first", "third", "third", "first"])
  ).toEqual(["first 2", "third 2", "second 1"]);
});
