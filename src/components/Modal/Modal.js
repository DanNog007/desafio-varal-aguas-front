import React from 'react';

import './Modal.css';

class Modal extends React.Component {

	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.target.disabled = true;
		this.props.action();
		e.target.disabled = false;
	}

	render() {
		return(
			<div id="myModal" className={this.props.show ? "modal show" : "modal"}>
  			<div className="modal-content">
    			<div className="modal-header">
      			<span className="close" onClick={this.props.hide}>&times;</span>
      			<h2>{this.props.title ? this.props.title : 'Modal'}</h2>
    			</div>
    			<div className="modal-body">
      			{this.props.children}
    			</div>
    			<div className="modal-footer">
      			<button onClick={this.handleClick}>{this.props.submitLabel ? this.props.submitLabel : "Confirmar"}</button>
    			</div>
  			</div>
			</div>
		);
	}

}

export default Modal;