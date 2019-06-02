import React from 'react';
import './css/concurso.css';
import { pipelineTopicExpression } from '@babel/types';

function Concurso(props) {
  return(
    <div className="Content" id="concurso">
      <div className="HalfContent">
        <h3>O Concurso</h3>
        <p>Concurso de fotografia para todos os técnicos do Inema para exposição de fotos que retratem a temática água (os desafios e as belezas encontradas em campo) pelos colaboradores. Além de uma apresentação cultural com um artista de rua (poesia, musica, cordel) que aborde a temática água. </p>
      </div>
      <div className="HalfContent">
        <div className="Card">
          <div className="CardContent">
            <h4>EXPOSIÇÃO DE FOTOS</h4>
            <p>20 á 24/03/2017 na divisórias da Ouvidoria (em frente ao elevador)</p>
          </div>
          <div className="CardContent">
            <h4>APRESENTAÇÃO</h4>
            <p>20/03/2017 das 16:30h ás 17:30h.</p>
          </div>
        </div>
        <div className="CardButton">
          <button onClick={props.showModal}>
            FAÇA SUA INSCRIÇÃO
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Concurso;