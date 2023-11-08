import generatePassword from "./Functions/generatePassword";

const PasswordApp = () => {
  const handleClick = () => {
    generatePassword(10, true, true, false);
  };
  return (
    <>
      <h1>Password Generator</h1>

      <button onClick={handleClick}>GENERATE NEW PASSWORD</button>
    </>
  );
};

export default PasswordApp;
