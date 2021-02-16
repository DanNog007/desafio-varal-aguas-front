import React from "react";
import Header from "./header";
import Concurso from "./concurso";
import Sobre from "./sobre";
import Regras from "./regras";
import Footer from "./footer";
import Form from "./form";
import Modal from "../../components/Modal/Modal";
import Toast from "../../components/Toast/Toast";
import "./css/index.css";
import axios from "axios";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      colaborador: {},
      error: {},
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
    this.setState({
      showModal: true,
      colaborador: {},
      error: {},
    });
  }

  hideModal() {
    this.setState({
      showModal: false,
      colaborador: {},
      error: {},
    });
    document.getElementById("inscricao").reset();
  }

  showToast() {
    this.setState({ showToast: true });
    setTimeout(() => {
      this.setState({ showToast: false });
    }, 3000);
  }

  handleInputChange(event) {
    const target = event.target;
    const value =
      target.type === "checkbox" ? (target.checked ? 1 : 0) : target.value;
    const name = target.name;

    let colaborador = this.state.colaborador;
    let error = this.state.error;

    if (target.type === "file") {
      colaborador.imageFile = target.files[0];
      error.foto = "";
    } else {
      colaborador[name] = value;
      error[name] = "";
    }

    this.setState({
      colaborador: colaborador,
      error: error,
    });
    console.log(this.state);
  }

  getBase64(file) {
    return new Promise(function (resolve, reject) {
      if (file) {
        var reader = new FileReader();
        reader.onload = function () {
          resolve(btoa(reader.result));
        };
        reader.onerror = reject;
        reader.readAsBinaryString(file);
      } else {
        resolve("");
      }
    });
  }

  handleSubmit() {
    let colaborador = this.state.colaborador;
    this.getBase64(colaborador.imageFile).then((b64file) => {
      let data = {
        nome: colaborador.nome,
        local_foto: colaborador.local_foto,
        nome_foto: colaborador.nome_foto,
        data_foto: colaborador.data_foto,
        termos: colaborador.termos,
        img_base64: b64file,
      };

      axios
        .post("http://apidev.inema.ba.gov.br/participante", data)
        .then((data) => {
          this.setState({
            message: "\u2713 Inscrição realizada com sucesso!",
          });
          this.showToast();
          this.hideModal();
          document.getElementById("inscricao").reset();
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            this.setState({ error: error.response.data.errors });
          }
        });
    });
  }

  render() {
    return (
      <div>
        <Header showModal={this.showModal} />
        <div className="Container">
          <Concurso showModal={this.showModal} />
          <Sobre />
          <Regras />
        </div>
        <Footer />
        <Modal
          title="Cadastro"
          submitLabel="Enviar"
          show={this.state.showModal}
          hide={this.hideModal}
          action={this.handleSubmit}
        >
          <Form
            id="inscricao"
            handleInputChange={this.handleInputChange}
            error={this.state.error}
          />
        </Modal>
        <Toast show={this.state.showToast} message={this.state.message} />
      </div>
    );
  }
}

export default Index;
