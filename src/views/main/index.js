import React from 'react';
import Header from './header';
import Concurso from './concurso';
import Sobre from './sobre';
import Regras from './regras';
import Footer from './footer';
import Form from './form';
import Modal from '../../components/Modal/Modal';
import './css/index.css';

class Index extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      colaborador: {},
      error: {},
      formData: new FormData(),
      response: {},
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showModal() {
    this.setState({ showModal: true });
  };

  hideModal() {
    this.setState({ showModal: false });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let formData = this.state.formData;
    let colaborador = this.state.colaborador;

    if (target.type === 'file'){
      formData.append('imageFile', target.files[0]);
    } else {
      colaborador[name] = value;
      formData.append(name, value);
    }

    this.setState({
      colaborador: colaborador,
      formData: formData,
    });
    console.log(this.state);
  }

  handleSubmit(){
    fetch('http://localhost:8080/colaborador',  {
      method: 'POST',
      body: this.state.formData
    })
      .then(response => response.json())
      .then(data => this.setState({ response:data }));
    console.log(this.state);
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
          <Form handleInputChange={this.handleInputChange} />
        </Modal>
      </div>
    );
  }
}



export default Index;