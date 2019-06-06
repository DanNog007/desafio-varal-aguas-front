import React from 'react';
import FormGroup from '../../components/FromGroup/FormGroup';

class Form extends React.Component{

	render(){
		return(
      <form>
        <div style={{width:'48%', float:'left', margin:'0 1%'}}>
          <FormGroup id="nome" label="Nome do colaborador:" type="text" placeholder="Insira seu nome" error="" onChange={this.props.handleInputChange} />
          <FormGroup id="nome_foto" label="Nome da foto:" type="text" placeholder="Insira o nome da foto" error="" onChange={this.props.handleInputChange} />
        </div>
        <div style={{width:'48%', float:'left', margin:'0 1%'}}>
          <FormGroup id="local_foto" label="Local da foto:" type="text" placeholder="Insira o local da foto" error=""  onChange={this.props.handleInputChange}/>
          <FormGroup id="data_foto" label="Data de registro:" type="text" placeholder="DD/MM/AAAA" error="" onChange={this.props.handleInputChange} />
        </div>
        <FormGroup id="imageFile" label="Anexar Foto:" type="file" error="" onChange={this.props.handleInputChange} />
        <FormGroup label="Termos:" type="none" error="">
          <div style={{height:'200px', width:'100%', overflow:'auto', border:'solid 1px #e5e5e5'}}>
            <ol type="I" style={{color:'#777777', fontSize:'11pt', paddingLeft:'26px'}}>
              <li style={{marginBottom:'15px'}}>Confirmo autoria da fotografia, que não constitui plágio em espécie alguma e não possui manipulação digital ou sobre posição;</li>
              <li style={{marginBottom:'15px'}}>Declaro cessão de direito de uso e publicações da fotogradia "Varal das Águas";</li>
              <li style={{marginBottom:'15px'}}>Autorização para veiculação de imagem e nome do colaborador, nome artistico para a foto, local e data de registro da foto, bem como permissão para os organizadores, a critério próprio, sem limite de tempo e sem a incidência de quaisquer ônus utilizarem ou divulgarem as imagens inscritas;</li>
              <li style={{marginBottom:'15px'}}>Confirmo autoria da fotografia, que não constitui plágio em espécie alguma e não possui manipulação digital ou sobre posição;</li>
              <li style={{marginBottom:'15px'}}>Declaro cessão de direito de uso e publicações da fotogradia "Varal das Águas";</li>
              <li style={{marginBottom:'15px'}}>Autorização para veiculação de imagem e nome do colaborador, nome artistico para a foto, local e data de registro da foto, bem como permissão para os organizadores, a critério próprio, sem limite de tempo e sem a incidência de quaisquer ônus utilizarem ou divulgarem as imagens inscritas;</li>
            </ol>
          </div>
        </FormGroup>
        <FormGroup id="termo" label="Eu li e concordo com os termos" type="checkbox" error="" onChange={this.props.handleInputChange} />
      </form>
		);
	}
}

export default Form;