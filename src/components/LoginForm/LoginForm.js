import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import cssModules from 'react-css-modules';
import styles from './loginForm.scss';
import FormButton from '../FormButton/FormButton';

@cssModules(styles)
@reduxForm({
  fields: ['username', 'password'],
  form: 'login'
})
class LoginForm extends Component {
  render() {
    const {
        fields,
        onSubmitLogin,
        message
    } = this.props;

    return (
      <div className="content login">
        <form className="login__form">
          <h2 className="login__title">Login secured site</h2>
          { message.error &&
            <div className="error"> Could not log in, please check your username and password.</div>
          }
          <input type="text" {...fields.username} id="userNameInput" name="userNameInput" placeholder="Username" />
          <input type="password" {...fields.password} id="passwordInput" name="passwordInput" placeholder="Password"/>
          <FormButton
            id="loginButton"
            name="loginButton"
            className="form-button"
            type="submit"
            disabled={false}
            onClickButton={ onSubmitLogin }>LOGIN
          </FormButton>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  fields: React.PropTypes.any,
  onSubmitLogin: React.PropTypes.func,
  message: React.PropTypes.object
};

export default LoginForm;
