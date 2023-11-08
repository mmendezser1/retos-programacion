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

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
  console.log("Generate Password: ");
  console.log("LENGTH: ", length);
  console.log("CAPITAL LETTERS: ", capLet);
  console.log("NUMBERS: ", numbers);
  console.log("SYMBOLS: ", symbols);

  /*
        La lógica, tendremos un array con cada condicion, es decir:
        -> Por defecto uno con letras minusculas ["a","b"...]
        -> Con mayúsculas ["A", "B"..]
        -> Con números [1,2,...]
        -> Con symbolos ["@", "?", ...]
        y añadirlos dependiendo o no si quiere la condicion a un array global con todos ["a","B",8,"@"]
        Ir generando numeros aleatorios y obteniendolos del array dependiendo de la longitud 

    */
  return "";
};
export default generatePassword;
