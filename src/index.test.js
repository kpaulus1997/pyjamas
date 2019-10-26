import {
  ifElseUndefined,
  len,
  isFalsy,
  isEmpty,
  bool,
  range,
  int
} from "./index";
// Defined
const definedValuesLength = 2;
const definedObject = { hello: "hello", world: "world" };
const definedArray = [0, 1];
const definedString = "hi";
// Empty
const emptyObject = {};
const emptyArray = [];
const emptyString = "";
// Some Types
const string = "hallo";
const integer = 8;
const float = 8.2;

// len
test("test len() with defined values", () => {
  expect(len(definedObject)).toBe(definedValuesLength);
  expect(len(definedArray)).toBe(definedValuesLength);
  expect(len(definedString)).toBe(definedValuesLength);
});

test("test len() with empty values", () => {
  expect(len(emptyArray)).toBe(0);
  expect(len(emptyObject)).toBe(0);
  expect(len(emptyString)).toBe(0);
});

test("test len() with nullish values", () => {
  expect(len(undefined)).toBe(-1);
  expect(len(undefined)).toBeDefined();
  expect(len(false)).toBe(-1);
  expect(len(false)).toBeDefined();
  expect(len(null)).toBe(-1);
  expect(len(null)).toBeDefined();
  expect(len(NaN)).toBe(-1);
  expect(len(NaN)).toBeDefined();
});

// isFalsy
test("test isFalsy() with defined values", () => {
  expect(isFalsy(definedObject)).toBe(false);
  expect(isFalsy(definedArray)).toBe(false);
  expect(isFalsy(definedString)).toBe(false);
  expect(isFalsy(string)).toBe(false);
  expect(isFalsy(integer)).toBe(false);
  expect(isFalsy(float)).toBe(false);
  expect(isFalsy(true)).toBe(false);
  // special (definedObject has own property 'hello')
  expect(isFalsy(() => [definedObject][0].hello)).toBe(false);
});

test("test isFalsy() with empty values", () => {
  expect(isFalsy(emptyArray)).toBe(true);
  expect(isFalsy(emptyObject)).toBe(true);
  expect(isFalsy(emptyString)).toBe(true);
});

test("test isFalsy() with nullish values", () => {
  expect(isFalsy(undefined)).toBe(true);
  expect(isFalsy(false)).toBe(true);
  expect(isFalsy(null)).toBe(true);
  expect(isFalsy(NaN)).toBe(true);
  // Special stuff
  expect(isFalsy([][0])).toBe(true);
  expect(isFalsy(() => [][0].name)).toBe(true);
});

// bool

test("test bool()", () => {
  expect(bool(undefined)).toBe(false);
  expect(bool(false)).toBe(false);
  expect(bool(NaN)).toBe(false);
  expect(bool(null)).toBe(false);
  expect(bool(emptyArray)).toBe(false);
  expect(bool(emptyObject)).toBe(false);
  expect(bool(emptyString)).toBe(false);
  expect(bool(0)).toBe(false);
  expect(bool(0.0)).toBe(false);
  // Special stuff
  expect(bool([][0])).toBe(false);
  expect(bool(() => [][0].name)).toBe(false);

  expect(bool(0.0000000001)).toBe(true);
  expect(bool(integer)).toBe(true);
  expect(bool(float)).toBe(true);
  expect(bool(true)).toBe(true);
});

// Empty
test("test isEmpty() with defined values", () => {
  expect(isEmpty(definedObject)).toBe(false);
  expect(isEmpty(definedArray)).toBe(false);
  expect(isEmpty(definedString)).toBe(false);
});

test("test isEmpty() with empty values", () => {
  expect(isEmpty(emptyArray)).toBe(true);
  expect(isEmpty(emptyObject)).toBe(true);
  expect(isEmpty(emptyString)).toBe(true);
});

test("test isEmpty() with nullish values", () => {
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty(false)).toBe(true);
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(NaN)).toBe(true);
});

// ifElseUndefined

test("test ifElseUndefined()", () => {
  const val = "val";
  // Truethy
  expect(ifElseUndefined(definedObject, val)).toBe(val);
  expect(ifElseUndefined(definedArray, val)).toBe(val);
  expect(ifElseUndefined(definedString, val)).toBe(val);
  expect(ifElseUndefined(true, val)).toBe(val);
  expect(ifElseUndefined(integer, val)).toBe(val);

  // Falsy
  expect(ifElseUndefined(emptyArray, val)).toBeUndefined();
  expect(ifElseUndefined(emptyObject, val)).toBeUndefined();
  expect(ifElseUndefined(emptyString, val)).toBeUndefined();
  expect(ifElseUndefined(undefined, val)).toBeUndefined();
  expect(ifElseUndefined(false, val)).toBeUndefined();
  expect(ifElseUndefined(NaN, val)).toBeUndefined();
  expect(ifElseUndefined(null, val)).toBeUndefined();
});

// range

test("test range()", () => {
  expect(range(2).toString()).toBe([0, 1].toString());
  expect(range(10).length).toBe(10);
  expect(range(5, 10)[0]).toBe(5);
  expect(range(5, 10)[4]).toBe(9);
  expect(range(5, 10).length).toBe(5);
});

// int

test("test int()", () => {
  // truthy
  expect(int(1)).toBe(1);
  expect(int(1.0)).toBe(1);
  expect(int("1")).toBe(1);
  expect(int(1.999999999)).toBe(1);
  expect(int(0.999999999)).toBe(0);
  expect(int("somethingAndANumber69")).toBe(0);

  // falsy
  expect(int(undefined)).toBe(0);
  expect(int(NaN)).toBe(0);
  expect(int(0)).toBe(0);
});
