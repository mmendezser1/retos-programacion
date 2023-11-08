import { expect, test } from "vitest";
import generatePassword from "../Functions/generatePassword";

test("Check function generatePassword returns correct length", () => {
  /* length, capLet, numbers,symbols  */
  const passwd = generatePassword(8, false, false, false);
  expect(passwd).toHaveLength(8);
});
test("Check function generatePassword generate password with capital letters", () => {
  const passwd = generatePassword(10, true, false, false);
  expect(passwd).toHaveLength(10);
  expect(hasCapitalLeter(passwd)).toBe(false);
});
test("Check function generatePassword generate password with numbers", () => {
  const passwd = generatePassword(10, true, true, false);

  expect(passwd).toHaveLength(10);
  expect(hasCapitalLeter(passwd)).toBe(false);
  expect(hasNumbers("passwd4")).toBe(true);
});

test("Check function generatePassword generate password with symbols", () => {
  const passwd = generatePassword(10, true, true, true);

  expect(passwd).toHaveLength(10);
  expect(hasCapitalLeter(passwd)).toBe(false);
  expect(hasNumbers(passwd)).toBe(true);
  expect(hasSymbols(passwd)).toBe(true);
});

const hasCapitalLeter = (word: string) => {
  return word.toLocaleLowerCase() === word;
};
const hasNumbers = (word: string) => {
  return /\d/.test(word);
};
const hasSymbols = (word: string) => {
  const symbolRegex = /[!€@#$%^&*()_+\-=[\]{};':"\\|,.<>/?¿]/;
  return symbolRegex.test(word);
};
