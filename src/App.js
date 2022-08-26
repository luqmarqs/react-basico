import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comentario nome="Joao" email="joao@mail.com" data={new Date(2022, 5, 22)}>
        Olá, tudo bem?
      </Comentario>
    </div>
  );
}

export default App;
