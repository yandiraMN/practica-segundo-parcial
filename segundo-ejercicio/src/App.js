import './App.css';
import Formulario from './components/Formulario';

function App() {
  const handleFormSubmit = (datos) => {
    console.log('Datos del formulario:', datos);
  };

  return (
    <div className="App">
      <Formulario onSubmit={handleFormSubmit}/>
  </div>
);
}

export default App;
