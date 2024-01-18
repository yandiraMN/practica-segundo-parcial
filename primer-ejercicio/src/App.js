import React, { useState, useEffect } from 'react';
import Boton from './components/Boton.js';
import Tiempo from './components/Tiempo.js';

function App() {
  const [corriendo, setCorriendo] = useState(false);
  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    let intervalo;

    if (corriendo) {
      intervalo = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [corriendo]);

  const iniciar = () => {
    setCorriendo(true);
  }

  const parar = () => {
    setCorriendo(false);
  }

  const reiniciar = () => {
    setCorriendo(false);
    setTiempo(0);
  }
  return (
    <div className="App">
      <div className='Centrar'>
      <h1>Cronometro</h1>
      <Tiempo tiempo={tiempo} />
        <Boton texto="Iniciar" tipo="verde" funcionClick={iniciar} />
        <Boton texto="Parar" tipo="rojo" funcionClick={parar} />
      <Boton texto="Reiniciar" tipo="amarillo" funcionClick={reiniciar} />
      </div>
      </div>
  );
}

export default App;