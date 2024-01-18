import React from 'react';

function Tiempo({tiempo}){
    const convertirTiempo=(segundos)=>{
        const minutos=Math.floor(segundos/60);
        const segundosRestantes = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
  };
  return (
    <div className="Tiempo">
      {convertirTiempo(tiempo)}
    </div>
  );
}

export default Tiempo;
