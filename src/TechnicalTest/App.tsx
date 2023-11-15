/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import api from "./api/api";
import "./assets/TechnicalTest1.css"; // Agrega estilos según tus necesidades

const TechnicalTest1 = () => {
  const [image, setImage] = useState("");
  const [fact, setFact] = useState("");

  useEffect(() => {
    callFactApi();
  }, []);

  const callFactApi = async () => {
    try {
      const resp = await api.getFacts();
      setFact(resp.fact);
      callImageApi(resp.fact.split(" ")[0]);
    } catch (error) {
      manageError();
    }
  };

  const callImageApi = async (imageDescrip: string) => {
    try {
      const resp = await api.getImage(imageDescrip);
      setImage(resp.url);
    } catch (error) {
      manageError();
    }
  };

  const handleClick = () => {
    callFactApi();
  };

  const manageError = () => {
    setFact("Hubo un error con las APIs :(");
    setImage("./src/assets/error500.jpg");
  };

  return (
    <div className="technical-test-container">
      <article className="technical-test-article">
        <p>Technical Test</p>
        <div className="fact-container">
          <h2>Fact Random:</h2>
          <p>{fact}</p>
        </div>
        <div className="image-container">
          <img height="200px" width="200px" src={image} alt="Random" />
        </div>
        <button className="custom-button" onClick={handleClick}>
          NEW FACT RANDOM
        </button>
      </article>
    </div>
  );
};

export default TechnicalTest1;
