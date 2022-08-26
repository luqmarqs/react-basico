import React from 'react';
import './Comentario.css'
//iniciar componentes com letra maiuscula
const Comentario = props => (
    <div className='Comentario'>
        <h2>
            {props.nome}:
        </h2>
        <p>{props.email}</p>
        <p>
            {props.children}
        </p>
        <p>
            {props.data.toString()}
        </p>
    </div>
);

export default Comentario;
