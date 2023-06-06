import React, { useState } from "react";
import "./calculadora.css";

const Calculadora = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const value = e.target.getAttribute("data-value");
    switch (value) {
      case "clear":
        setInput("");
        setResult("");
        break;
      case "delete":
        setInput(input.slice(0, -1));
        break;
      case "=":
        try {
          setResult(eval(input).toString());
        } catch (error) {
          setResult("Error");
        }
        break;
      default:
        setInput(input + value);
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="input">{input || "0"}</div>
      <div className="result">{result}</div>
      <button className="operator" data-value="clear" onClick={handleClick}>
        AC
      </button>
      <button className="operator" data-value="delete" onClick={handleClick}>
        &lt
      </button>
      <button className="operator" data-value="/" onClick={handleClick}>
        ÷
      </button>
      <button className="operator" data-value="*" onClick={handleClick}>
        x
      </button>
      {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) => (
        <button key={number} data-value={number} onClick={handleClick}>
          {number}
        </button>
      ))}
      <button data-value="." onClick={handleClick}>
        .
      </button>
      <button className="operator" data-value="=" onClick={handleClick}>
        =
      </button>
    </div>
  );
};

export default Calculadora;
