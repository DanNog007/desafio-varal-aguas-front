import React from 'react';
import Header from './header';
import Concurso from './concurso';
import Sobre from './sobre';
import Regras from './regras';
import Footer from './footer';
import Form from './form';
import Modal from '../../components/Modal/Modal';
import Toast from '../../components/Toast/Toast';
import './css/index.css';

class Index extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      colaborador: {},
      error: {},
      formData: new FormData(),
      showToast: false,
      message: "",
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showToast = this.showToast.bind(this);
  }

  showModal() {
    document.getElementById("inscricao").reset();
    this.setState({ showModal: true, colaborador: {}, error: {}, formData: new FormData() });
  };

  hideModal() {
    this.setState({ showModal: false, colaborador: {}, error: {}, formData: {} });
    document.getElementById("inscricao").reset();
  };

  showToast(){
    this.setState({showToast: true});
    setTimeout(() =>{this.setState({showToast: false})}, 3000);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? (target.checked ? 1 : 0) : target.value;
    const name = target.name;

    let formData = this.state.formData;
    let colaborador = this.state.colaborador;
    let error = this.state.error;

    if (target.type === 'file'){
      formData.append('imageFile', target.files[0]);
      error.foto = "";
    } else {
      colaborador[name] = value;
      error[name] = "";
    }

    this.setState({
      colaborador: colaborador,
      formData: formData,
      error: error,
    });
    console.log(this.state);
  }

  handleSubmit(){
    let formData = this.state.formData;
    let colaborador = this.state.colaborador
    Object.keys(colaborador).forEach(key => formData.append(key, colaborador[key]));

    fetch('http://localhost:8080/colaborador',  {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === true){
          this.setState({message: "\u2713 Inscrição realizada com sucesso!"});
          this.showToast();
          this.hideModal();
          document.getElementById("inscricao").reset();
        } else {
          this.setState({ error: data.error});
        }
      });
  }

  render() {
    return(
      <div>
        <Header showModal={this.showModal} />
        <div className="Container">
          <Concurso showModal={this.showModal} />
          <Sobre />
          <Regras />
        </div>
        <Footer />
        <Modal title="Cadastro" submitLabel="Enviar" show={this.state.showModal} hide={this.hideModal} action={this.handleSubmit}>
          <Form id="inscricao" handleInputChange={this.handleInputChange} error={this.state.error} />
        </Modal>
        <Toast show={this.state.showToast} message={this.state.message} />
      </div>
    );
  }
}

export default Index;