import React from 'react';
import './css/form.css';

class Form extends React.Component{

	render(){
		return(
      <form>
        <div style={{width:'48%', float:'left', margin:'0 1%'}}>
          <div className="FormGroup">
            <label for="nome">Nome do colaborador:</label><br/>
            <input className="FormField" type="text" name="nome" id="nome" placeholder="Insira seu nome" />
          </div>
          <div className="FormGroup">
            <label for="nomeFoto">Nome da foto:</label><br/>
            <input className="FormField" type="text" name="nomeFoto" id="nomeFoto" placeholder="Insira o nome da foto" />
          </div>
        </div>
        <div style={{width:'48%', float:'left', margin:'0 1%'}}>
          <div className="FormGroup">
            <label for="local">Local da foto:</label><br/>
            <input className="FormField" type="text" name="local" id="local" placeholder="Insira o local da foto" />
          </div>
          <div className="FormGroup">
            <label for="data">Data de registro:</label><br/>
            <input className="FormField" type="text" name="data" id="data" placeholder="DD/MM/AAAA" />
          </div>
        </div>
        <div className="FormGroup" style={{clear:'both'}}>
          <label for="foto">Anexar Foto:</label><br/>
          <input type="file" name="foto" id="foto" />
        </div>
        <div className="FormGroup" style={{clear:'both'}}>
          <label>Termos:</label><br/>
          <div style={{height:'200px', width:'568px', overflow:'auto', border:'solid 1px #e5e5e5'}}>
            <ol type="I" style={{color:'#777777', fontSize:'11pt', paddingLeft:'26px'}}>
              <li style={{marginBottom:'15px'}}>Confirmo autoria da fotografia, que não constitui plágio em espécie alguma e não possui manipulação digital ou sobre posição;</li>
              <li style={{marginBottom:'15px'}}>Declaro cessão de direito de uso e publicações da fotogradia "Varal das Águas";</li>
              <li style={{marginBottom:'15px'}}>Autorização para veiculação de imagem e nome do colaborador, nome artistico para a foto, local e data de registro da foto, bem como permissão para os organizadores, a critério próprio, sem limite de tempo e sem a incidência de quaisquer ônus utilizarem ou divulgarem as imagens inscritas;</li>
              <li style={{marginBottom:'15px'}}>Confirmo autoria da fotografia, que não constitui plágio em espécie alguma e não possui manipulação digital ou sobre posição;</li>
              <li style={{marginBottom:'15px'}}>Declaro cessão de direito de uso e publicações da fotogradia "Varal das Águas";</li>
              <li style={{marginBottom:'15px'}}>Autorização para veiculação de imagem e nome do colaborador, nome artistico para a foto, local e data de registro da foto, bem como permissão para os organizadores, a critério próprio, sem limite de tempo e sem a incidência de quaisquer ônus utilizarem ou divulgarem as imagens inscritas;</li>
            </ol>
          </div>
        </div>
        <div className="FormGroup" style={{clear:'both'}}>
          <label className="LabelCheckbox" for="termo">
            <input type="checkbox" name="termo" id="termo" />
            Eu li e concordo com os termos
          </label>
        </div>
      </form>
		);
	}
}

export default Form;