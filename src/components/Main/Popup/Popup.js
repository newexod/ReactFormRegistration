import React, { Component } from 'react';
import Popup from './Popup.scss';

class PopupComponent extends Component {
  render() {
    const { email } = this.props;
    return (
      <section>
        <div>
          <h3>Hello, {email}</h3>
        </div>
      </section>
    );
  }
}

export default PopupComponent;
