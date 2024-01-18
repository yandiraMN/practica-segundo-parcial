import React, { useState } from "react";
import '../style/Formularios.css';

function Formulario({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ nombre, apellido, edad });
    setFormularioEnviado(true);
  };

  return (
    <div className="form">
      {formularioEnviado ? (
        <div>
          <h1>Solicitud enviada a la base de datos con los siguientes datos:</h1>
          
            <li>Nombre: {nombre}</li>
          <li>Apellido: {apellido}</li>
          <li>Edad: {edad}</li>
        
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Nombre: 
              <br/>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </label>
            <br/>
            <label>
              Apellido:
              <br/>
              <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </label>
            <br/>
            <label>
              Edad:
              <br/>
              <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />
            </label>
            <br/>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Formulario;
