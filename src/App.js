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

  adiconarComentario = () => {
    console.log("Adicionando comentário...");
    
    const novoComentario = {
      nome: 'Maria',
      email: 'maria@mail.com',
      data: new Date(2022, 5, 26),
      mensagem: 'olá pessoal'
    }

    //operação passo a passo: muitas linhas

    /*let lista = this.state.comentarios;
    lista.push(novoComentario);

    this.setState({comentarios = lista});*/

    //operação em apenas uma linha

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario]
    });
  
    
  };

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
        
        <button onClick={this.adiconarComentario}>Adicionar um comentário</button>
      </div>
    );
  }
  
}

export default App;
