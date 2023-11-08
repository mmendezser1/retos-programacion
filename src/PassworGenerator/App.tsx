import generatePassword from "./Functions/generatePassword";

const PasswordApp = () => {
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
