import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joao@mail.com',
        data: new Date(2022, 5, 21),
        mensagem: 'Olá, tudo bem?'
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <h1>Meu projeto</h1>
        {this.state.comentarios.map((comentario, indice) =>(
          <Comentario 
          key={indice}
          nome={comentario.nome}
          email={comentario.email}
          data={comentario.data}>
          {comentario.mensagem}
        </Comentario>
        ))}
        
      </div>
    );
  }
  
}

export default App;
