import React from 'react';
import './FormGroup.css';

class FormGroup extends React.Component{
	render(){
    if (this.props.type === "text"){
      return(
        <div className="FormGroup">
          <label for={this.props.id}>{this.props.label}</label>
          <input className="FormField" type="text" name={this.props.id} id={this.props.id} placeholder={this.props.placeholder} onChange={this.props.onChange} />
          <label className={this.props.error ? "FormErrorShow" : "FormError"}>{this.props.error}</label>
        </div>
      );
    } else if (this.props.type === "date"){
      return(
        <div className="FormGroup">
          <label for={this.props.id}>{this.props.label}</label>
          <input className="FormField" type="date" name={this.props.id} id={this.props.id} placeholder={this.props.placeholder} onChange={this.props.onChange} />
          <label className={this.props.error ? "FormErrorShow" : "FormError"}>{this.props.error}</label>
        </div>
      );
    } else if (this.props.type === "file"){
      return(
        <div className="FormGroup">
          <label for={this.props.id}>{this.props.label}</label>
          <input type="file" name={this.props.id} id={this.props.id} onChange={this.props.onChange} />
          <label className={this.props.error ? "FormErrorShow" : "FormError"}>{this.props.error}</label>
        </div>
      );
    } else if (this.props.type === "checkbox"){
      return(
        <div className="FormGroup">
          <label className="LabelCheckbox" for={this.props.id}>
            <input type="checkbox" name={this.props.id} id={this.props.id} onChange={this.props.onChange} />
          {this.props.label}</label>
          <label className={this.props.error ? "FormErrorShow" : "FormError"}>{this.props.error}</label>
        </div>
      );
    } else {
      return(
        <div className="FormGroup">
          <label for={this.props.id}>{this.props.label}</label>
            {this.props.children}
            <label className={this.props.error ? "FormErrorShow" : "FormError"}>{this.props.error}</label>
        </div>
      );
    }
  }
}

export default FormGroup;