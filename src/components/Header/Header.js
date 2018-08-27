import React, { Component } from 'react';

import logo from '../../logo.svg';
import Header from './Header.scss';

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <p>
          <img src={logo} alt="logo" />
        </p>
        <div>
          <h2>swedavia</h2>
          <h3>swedish airports</h3>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;