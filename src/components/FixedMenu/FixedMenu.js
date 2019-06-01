import React from 'react';
import './FixedMenu.css'

class FixedMenu extends React.Component {

  render() {
    return (
      <div className="FixedMenu">
        <ul>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export default FixedMenu;