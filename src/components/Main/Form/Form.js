import React, { Component } from 'react';

import Popup from '../Popup/Popup';
import { FormErrors } from './FormErrors/FormErrors';

import Form from './Form.scss';

class FormComponent extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      email: '',
      pass: '',
      formErrors: {email: '', pass: ''},
      emailValid: false,
      passValid: false,
      formValid: false,
      isShowModal: false
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        [name]: value
      }, () => { this.validateField(name, value)
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passValid = this.state.passValid;

    switch(fieldName) {
      case 'email': 
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'pass':
        passValid = value.match(/(?=.*\d{2})(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&]{8,}/g);
        fieldValidationErrors.pass = passValid ? '' : ' must contain at least 8 symbols, 2 figures and 1 special symbol';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passValid: passValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passValid
    });
  }

  handleSubmitForm = (e) => {
    e.preventDefault();

    this.setState({
      isShowModal: true
    });
  }

  render() {
    return (
      <form>
        <FormErrors formErrors={this.state.formErrors} />
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleUserInput}
          />
        </label>
        <label htmlFor="pass">
          Password
          <input 
            type="password"
            name="pass"
            value={this.state.pass}
            onChange={this.handleUserInput}
          />
        </label>
        <div>
          <button
            type="submit"
            disabled={!this.state.formValid}
            onClick={this.handleSubmitForm}
          >Отправить</button>
          <button type="button">Forgot password?</button>
        </div>
        {this.state.isShowModal === true ? (
          <Popup email={this.state.email} />
        ) : null}
      </form>
    );
  }
}

export default FormComponent;
