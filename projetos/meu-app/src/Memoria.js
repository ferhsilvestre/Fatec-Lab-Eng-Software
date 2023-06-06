import './Memoria.css';

import React, { useEffect, useState } from "react";

const qtdeCartas = 12;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const emojis = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
  "🦆"
];

const JogoDaMemoria = () => {
    
  const [inGame, setInGame] = useState(true);
  const [cartas, setCartas] = useState([]);
  const [selecionadas, setSelecionadas] = useState([]);
  const [selecionadaTemporariamente, setSelecionadaTemporariamente] =
    useState(null);
  const [paresEncontrados, setParesEncontrados] = useState(0);

  useEffect(() => {
    let cartasAleatorias = [];
    for (let i = 0; i < qtdeCartas; i += 2) {
      const indiceAleatorio = Math.floor(Math.random() * emojis.length);
      cartasAleatorias.push({
        emoji: emojis[indiceAleatorio],
        foiEncontrada: false,
        id: i,
      });
      cartasAleatorias.push({
        emoji: emojis[indiceAleatorio],
        foiEncontrada: false,
        id: i + 1,
      });
    }
    cartasAleatorias = shuffle(cartasAleatorias);
    setCartas(cartasAleatorias);
  }, []);

  const selecionarCarta = (id) => {
    const cartaSelecionada = cartas.find((carta) => carta.id === id);
    if (cartaSelecionada.foiEncontrada) {
      return;
    }
    if (selecionadaTemporariamente !== null) {
      return;
    }
    if (selecionadas.length === 0) {
      setSelecionadaTemporariamente(cartaSelecionada);
      setTimeout(() => {
        setSelecionadaTemporariamente(null);
        setSelecionadas([cartaSelecionada]);
      }, 500);
    } else if (selecionadas.length === 1) {
      const segundaSelecionada = cartaSelecionada;
      setSelecionadaTemporariamente(cartaSelecionada);
      setTimeout(() => {
        setSelecionadaTemporariamente(null);
        setSelecionadas([...selecionadas, segundaSelecionada]);
        if (segundaSelecionada.emoji === selecionadas[0].emoji) {
          setParesEncontrados(paresEncontrados + 1);
          if(paresEncontrados+1 === qtdeCartas/2) {
            setInGame(false);
          }
          const novasCartas = cartas.map((carta) => {
            if (
              carta.id === cartaSelecionada.id ||
              carta.id === selecionadas[0].id
            ) {
              carta.foiEncontrada = true;
            }
            return carta;
          });
          setCartas(novasCartas);
          setSelecionadas([]);
        } else {
          setTimeout(() => {
            setSelecionadas([]);
          }, 1000);
        }
      }, 1000);
    }
  };
  if (inGame) {
    return (
      <div className="containerMemory">

        <p> Você encontrou{" "}
          {paresEncontrados} {paresEncontrados === 1 ? "par" : "pares"} até
          agora. 
        </p>
        <div className="cartas">
          {cartas.map((carta) => (
            <div
              key={carta.id}
              className={`carta ${carta.foiEncontrada ? "encontrada" : ""}`}
              onClick={() => selecionarCarta(carta.id)}
            >
              {selecionadaTemporariamente === carta ||
              selecionadas.includes(carta) ? (
                <span>{carta.emoji}</span>
              ) : (
                <span>🃏</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <>Parabens, voce finalizou !</>;
  }
};

export default JogoDaMemoria;