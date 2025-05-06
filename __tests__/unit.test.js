// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Phone number tests
test('555-555-5555 is a phone number', () => {
  expect(isPhoneNumber("555-555-5555")).toBe(true);
});

test('(650)123-4567 is a phone number', () => {
  expect(isPhoneNumber("(650)123-4567")).toBe(true);
});

test('abc is not a phone number', () => {
  expect(isPhoneNumber("abc")).toBe(false);
});

test('1 is not a phone number', () => {
  expect(isPhoneNumber("1")).toBe(false);
});


// Email tests
test('xyz@ucsd.edu is a valid email', () => {
  expect(isEmail("xyz@ucsd.edu")).toBe(true);
});

test('bob@gmail.com is a valid email', () => {
  expect(isEmail("bob@gmail.com")).toBe(true);
});

test('random word is not a valid email', () => {
  expect(isEmail("random word")).toBe(false);
});

test('650-444-4444 is not a valid email', () => {
  expect(isEmail("650-444-4444")).toBe(false);
});


// Password tests
test('abc1 is a valid password', () => {
  expect(isStrongPassword("abc1")).toBe(true);
});

test('z__zzz is a valid password', () => {
  expect(isStrongPassword("z__zzz")).toBe(true);
});

test('123 is not a valid password', () => {
  expect(isStrongPassword("123")).toBe(false);
});

test('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx is not a valid password', () => {
  expect(isStrongPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")).toBe(false);
});


// Date tests
test('06/13/2025 is a valid date', () => {
  expect(isDate("06/13/2025")).toBe(true);
});

test('6/13/2025 is a valid date', () => {
  expect(isDate("6/13/2025")).toBe(true);
}); 

test('12 is not a valid date', () => {
  expect(isDate("12")).toBe(false);
});

test('6/13/25 is not a valid date', () => {
  expect(isDate("6/13/25")).toBe(false);
});


// Hex Color tests
test("FFF is a valid hex color", () => {
  expect(isHexColor("FFF")).toBe(true);
});

test("#FFF is a valid hex color", () => {
  expect(isHexColor("#FFF")).toBe(true);
});

test("f is not a valid hex color", () => {
  expect(isHexColor("f")).toBe(false);
});

test("abcdferesa is not a valid hex color", () => {
  expect(isHexColor("abcdferesa")).toBe(false);
});

