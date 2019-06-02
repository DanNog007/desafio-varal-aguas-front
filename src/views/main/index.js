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
      showModal: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ showModal: true });
  };

  hideModal() {
    this.setState({ showModal: false });
  };

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
        <Modal title="Cadastro" submitLabel="Enviar" show={this.state.showModal} hide={this.hideModal}>
          <Form />
        </Modal>
      </div>
    );
  }
}



export default Index;