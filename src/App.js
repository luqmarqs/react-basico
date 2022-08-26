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
    ],
    novoComentario: {
      nome:'',
      email:'',
      mensagem:''
    }
  };

  adicionarComentario = evento => {

    evento.preventDefault();
    console.log("Adicionando comentário...");
    
    /*const novoComentario = {
      nome: 'Maria',
      email: 'maria@mail.com',
      data: new Date(2022, 5, 26),
      mensagem: 'olá pessoal'
    }*/
    const novoComentario = {...this.state.novoComentario, data: new Date() }
    
    //operação passo a passo: muitas linhas

    /*let lista = this.state.comentarios;
    lista.push(novoComentario);

    this.setState({comentarios = lista});*/

    //operação em apenas uma linha

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome:'', email:'', mensagem:''}
    });

    
  
    
  };

  digitacao = evento => {
    const { name, value } = evento.target;
    console.log(evento);
    this.setState({novoComentario: {...this.state.novoComentario, [name]:value}})
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
        
        {/** botão estático */}
        {/*<button onClick={this.adiconarComentario}>Adicionar um comentário</button>*/} 

        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar comentário</h2>
          <div>
            <input 
            type="text" 
            name="nome" 
            value={this.state.novoComentario.nome}
            onChange={this.digitacao}
            placeholder="Digite seu nome"/>
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              required
              placeholder="Digite seu email" />
          </div>
          <div>
            <textarea 
            name="mensagem" 
            value={this.state.novoComentario.mensagem}
            onChange={this.digitacao}
            rows="4"/>
          </div>

          <button type="submit">Adicionar comentário</button>

        </form>
      </div>
    );
  }
  
}

export default App;
