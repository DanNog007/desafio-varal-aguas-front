import React from 'react';
import './Toast.css';

class Toast extends React.Component {

    render(){
        return(
            <div className={this.props.show ? "Toast Show" : "Toast"}> 
                {this.props.message}
            </div>
        );
    }

}

export default Toast;