import { useState } from "react";
import generatePassword from "./Functions/generatePassword";
import "./Assets/Styles/index.css";
const PasswordApp = () => {
  const [lengthPassword, setLengthPassword] = useState(8);
  const [checkCapitalLetters, setCheckCapitalLetters] = useState(false);
  const [checkNumbers, setCheckNumbers] = useState(false);
  const [checkSymbols, setCheckSymbols] = useState(false);
  const [passwordGenerated, setPassword] = useState<string | undefined>();
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setPassword(
      generatePassword(
        lengthPassword,
        checkCapitalLetters,
        checkNumbers,
        checkSymbols
      )
    );
  };
  return (
    <div className="container">
      <h1>Password Generator</h1>
      <article>
        <form onSubmit={handleClick} className="formGeneratePassword">
          <div className="inputContainer">
            <label className="formLabel">Length</label>
            <input
              type="number"
              value={lengthPassword}
              min={8}
              max={16}
              onChange={(e) => setLengthPassword(Number(e.target.value))}
              className="formInput"
            />
          </div>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              checked={checkCapitalLetters}
              onChange={(e) => setCheckCapitalLetters(e.target.checked)}
              className="formCheckbox"
            />
            <label className="checkboxLabel">Include Capital Letters</label>
          </div>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              checked={checkNumbers}
              onChange={(e) => setCheckNumbers(e.target.checked)}
              className="formCheckbox"
            />
            <label className="checkboxLabel">Include Numbers</label>
          </div>
          <div className="checkboxContainer">
            <input
              type="checkbox"
              checked={checkSymbols}
              onChange={(e) => setCheckSymbols(e.target.checked)}
              className="formCheckbox"
            />
            <label className="checkboxLabel">Include Symbols</label>
          </div>
          {passwordGenerated && (
            <div>
              <p> {passwordGenerated}</p>
            </div>
          )}
          <button type="submit" className="submitButton">
            GENERATE NEW PASSWORD
          </button>
        </form>
      </article>
    </div>
  );
};

export default PasswordApp;
