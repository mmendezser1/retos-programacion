const CAPITAL_LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const LOWERCASE_LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const SYMBOLS = [
  "!",
  "€",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "'",
  "|",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  "¿",
  "]",
];

const generatePassword = (
  length: number,
  capLet: boolean,
  numbers: boolean,
  symbols: boolean
) => {
  let password_combinations = LOWERCASE_LETTERS;
  if (capLet)
    password_combinations = [...password_combinations, ...CAPITAL_LETTERS];

  if (numbers) password_combinations = [...password_combinations, ...NUMBERS];

  if (symbols) password_combinations = [...password_combinations, ...SYMBOLS];

  let password_generated = "";
  while (password_generated.length !== length) {
    const randomNumber = Math.floor(
      Math.random() * password_combinations.length
    );
    password_generated += password_combinations[randomNumber];
  }
  console.log(password_generated);
  return password_generated;
};
export default generatePassword;
