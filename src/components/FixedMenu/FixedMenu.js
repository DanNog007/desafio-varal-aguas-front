import React from 'react';
import './FixedMenu.css'

class FixedMenu extends React.Component {

  render() {
    return (
      <div className="FixedMenu">
        {this.props.children}
      </div>
    );
  }
}

export default FixedMenu;