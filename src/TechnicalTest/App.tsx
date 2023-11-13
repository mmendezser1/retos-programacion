import { useEffect, useState } from "react";
import api from "./api/api";

const TechnicalTest1 = () => {
  const [image, setImage] = useState("");
  const [fact, setFact] = useState();

  useEffect(() => {
    console.log("hello");
    callFactApi();
    callImageApi();
  }, []);
  const handleClick = () => {
    console.log("Click");
  };
  const callFactApi = async () => {
    const resp = await api.getFacts();
    console.log(resp);
    setFact(resp.fact);
  };
  const callImageApi = async () => {
    const resp = await api.getImage("hello");
    console.log();
    setImage(resp.url);
  };
  return (
    <>
      <p>Technical Test</p>
      <h2>Fact Random: </h2>
      <p>{fact}</p>
      <img src={image} />

      <button onClick={handleClick}> NEW FACT RANDOM </button>
    </>
  );
};

export default TechnicalTest1;
