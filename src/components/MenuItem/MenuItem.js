import React from 'react';
import './MenuItem.css'

class MenuItem extends React.Component {

  render() {
    return (
			<li className="MenuItem">
     		<a href={this.props.link} onClick={this.props.action}>{this.props.text}</a>
			</li>
    );
  }
}

export default MenuItem;