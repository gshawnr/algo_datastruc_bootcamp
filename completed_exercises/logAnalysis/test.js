const logAnalysis = require("./index");

test("logAnalysis is a function", () => {
  expect(typeof logAnalysis).toEqual("function");
});

test("logAnalysis with maxSpan produces correct result", () => {
  const logs = [
    "99 1 sign-in",
    "100 10 sign-in",
    "50 20 sign-in",
    "100 15 sign-out",
    "50 26 sign-out",
    "99 2 sign-out",
  ];
  const result = logAnalysis(logs, 5);
  expect(result).toEqual(["99", "100"]);
});

test("logAnalysis returns user who signed out within large maxSpan", () => {
  const logs = [
    "60 12 sign-in",
    "80 20 sign-out",
    "10 20 sign-in",
    "60 20 sign-out",
  ];
  const result = logAnalysis(logs, 100);
  expect(result).toEqual(["60"]);
});

test("logAnalysis with all users over maxSpan returns empty", () => {
  const logs = [
    "10 1 sign-in",
    "10 30 sign-out",
    "20 2 sign-in",
    "20 25 sign-out",
  ];
  const result = logAnalysis(logs, 10);
  expect(result).toEqual([]);
});

test("logAnalysis handles unordered logs correctly", () => {
  const logs = [
    "22 100 sign-out",
    "21 20 sign-in",
    "21 25 sign-out",
    "22 80 sign-in",
  ];
  const result = logAnalysis(logs, 30);
  expect(result).toEqual(["21", "22"]);
});

test("logAnalysis with missing sign-out does not include that user", () => {
  const logs = ["11 10 sign-in", "12 15 sign-in", "12 20 sign-out"];
  const result = logAnalysis(logs, 10);
  expect(result).toEqual(["12"]);
});

test("logAnalysis handles numeric sorting properly", () => {
  const logs = [
    "2 5 sign-in",
    "10 1 sign-in",
    "2 10 sign-out",
    "10 3 sign-out",
  ];
  const result = logAnalysis(logs, 10);
  expect(result).toEqual(["2", "10"]); // Sorted numerically, not lexically
});
