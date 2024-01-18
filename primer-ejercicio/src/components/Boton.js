import React from 'react';
import '../styles/Boton.css';

function Boton({ texto, tipo, funcionClick }) {
  return (
    <button
      className={`boton-${tipo}`}
      onClick={funcionClick}
    >
      {texto}
    </button>
  );
}

export default Boton;
