import { useState } from "react";
import generatePassword from "./Functions/generatePassword";

const PasswordApp = () => {
  const [lengthPassword, setLengthPassword] = useState(8);
  const [checkCaptialLetters, setCapitalLetters] = useState(false);
  const [checkNumbers, setCheckNumbers] = useState(false);
  const [checkSymbols, setCheckSymbols] = useState(false);

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    generatePassword(
      lengthPassword,
      checkCaptialLetters,
      checkNumbers,
      checkSymbols
    );
  };
  return (
    <>
      <h1>Password Generator</h1>
      <form onSubmit={handleClick}>
        <label>Number</label>
        <input
          type="number"
          value={lengthPassword}
          min={8}
          max={16}
          onChange={(e) => setLengthPassword(Number(e.target.value))}
        />
        <label>
          Checkbox Capital Letters:
          <input
            type="checkbox"
            checked={checkCaptialLetters}
            onChange={(e) => setCapitalLetters(e.target.checked)}
          />
        </label>

        <label>
          Checkbox Numbers
          <input
            type="checkbox"
            checked={checkNumbers}
            onChange={(e) => setCheckNumbers(e.target.checked)}
          />
        </label>
        <label>
          Checkbox Symbols
          <input
            type="checkbox"
            checked={checkSymbols}
            onChange={(e) => setCheckSymbols(e.target.checked)}
          />
        </label>
        <button type="submit">GENERATE NEW PASSWORD</button>
      </form>
    </>
  );
};

export default PasswordApp;
