const PasswordApp = () => {
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
  };

  const handleClick = () => {
    generatePassword(8, true, true, true);
  };
  return (
    <>
      <h1>Password Generator</h1>

      <button onClick={handleClick}>GENERATE NEW PASSWORD</button>
    </>
  );
};

export default PasswordApp;
