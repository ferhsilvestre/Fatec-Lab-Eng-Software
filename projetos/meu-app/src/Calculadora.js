import "./calculadora.css";

import React, { useState } from "react";

function Calculadora() {
  const [valorDisplay, setValorDisplay] = useState("");
  const [operacao, setOperacao] = useState("");
  const [limparDisplay, setLimparDisplay] = useState(true);

  const adicionarDigito = (digito) => {
    setValorDisplay((prevValor) => (prevValor === "0" || limparDisplay ? digito : prevValor + digito));
    setLimparDisplay(false);
  };

  const limparTudo = () => {
    setValorDisplay("");
    setOperacao("");
    setLimparDisplay(true);
  };

  const limparUltimaEntrada = () => {
    setValorDisplay((prevValor) => prevValor.slice(0, -1));
  };

  const adicionarOperacao = (op) => {
    if (op === "%") {
      calcularPorcentagem();
    } else {
      setOperacao(op);
      setValorDisplay((prevValor) => prevValor + " " + op + " ");
      setLimparDisplay(false);
    }
  };

  const calcularPorcentagem = () => {
    try {
      const valor = parseFloat(valorDisplay);
      const resultado = valor / 100;
      setValorDisplay(resultado.toString());
    } catch (error) {
      console.error("Erro de cálculo:", error);
      setValorDisplay("Erro");
    }
    setOperacao("");
    setLimparDisplay(true);
  };

  const calcularResultado = () => {
    try {
      const resultado = eval(valorDisplay);
      setValorDisplay(resultado.toString());
    } catch (error) {
      console.error("Erro de cálculo:", error);
      setValorDisplay("Erro");
    }
    setOperacao("");
    setLimparDisplay(true);
  };

  const alterarSinal = () => {
    setValorDisplay((prevValor) => {
      const ultimoEspaco = prevValor.lastIndexOf(" ");
      const ultimoValor = prevValor.slice(ultimoEspaco + 1);
      const novoUltimoValor = parseFloat(ultimoValor) * -1;
      const novoValor = prevValor.slice(0, ultimoEspaco + 1) + novoUltimoValor.toString();
      return novoValor;
    });
  };
  
  

  return (
    <div className='container'>
    <div className='div-test'>
    <div className='centralizar'>
    <div className="calculadora">
      <div className="display">{valorDisplay || "0"}</div>
      <div className="linha">
        <button className={limparDisplay ? "botao-funcao" : "botao-funcao limpar"} onClick={limparDisplay ? limparTudo : limparUltimaEntrada}>
          {limparDisplay ? "AC" : "C"}
        </button>
        <button className="botao-funcao" onClick={alterarSinal}>
          ±
        </button>
        <button className="botao-funcao" onClick={() => adicionarOperacao("%")}>
          %
        </button>
        <button className="botao-operacao" onClick={() => adicionarOperacao("/")}>
          ÷
        </button>
      </div>
      <div className="linha">
      {
        ["7", "8", "9"].map((digito) => (
          <button key={digito} className="botao-numero" onClick={() => adicionarDigito(digito)}>
        {digito}
        </button>
        ))
      }
       
        <button className="botao-operacao" onClick={() => adicionarOperacao("*")}>
          ×
        </button>

      </div>
      <div className="linha">

      {
        ["4", "5", "6"].map((digito) => (
          <button key={digito} className="botao-numero" onClick={() => adicionarDigito(digito)}>
        {digito}
        </button>
        ))
      }
        <button className="botao-operacao" onClick={() => adicionarOperacao("-")}>
          −
        </button>
      </div>
      <div className="linha">
      {
        ["1", "2", "3"].map((digito) => (
          <button key={digito} className="botao-numero" onClick={() => adicionarDigito(digito)}>
        {digito}
        </button>
        ))
      }
        <button className="botao-operacao" onClick={() => adicionarOperacao("+")}>
          +
        </button>
      </div>
      <div className="linha">
        <button className="botao-numero-zero" onClick={() => adicionarDigito("0")}>
          0
        </button>
        <button className="botao-numero" onClick={() => adicionarDigito(".")}>
          .
        </button>
        <button className="botao-igual" onClick={calcularResultado}>
          🦇
        </button>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Calculadora;