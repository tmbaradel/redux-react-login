import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-router';
import LoginForm from '../../components/LoginForm/LoginForm';
import { authUser } from '../../actions/loginActions';

class Login extends Component {
  constructor() {
    super();
    this.handleUserPassword = this.handleUserPassword.bind(this);
  }

  componentWillMount() {
    this.checkLogged();
  }

  componentDidUpdate() {
    this.checkLogged();
  }


  handleUserPassword() {
    const { dispatch, form } = this.props;
    dispatch(authUser(form.login.username.value, form.login.password.value));
  }

  checkLogged() {
    const { auth, dispatch } = this.props;
    if (auth.userAuth.token && auth.userAuth.token !== '') {
      dispatch(push('/admin'));
    }
  }

  render() {
    const { state } = this.props;
    const msg = state.authReducer.message || {};
    return (
      <div>
      <LoginForm
        onSubmitLogin={this.handleUserPassword}
        message={msg}
      />
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: React.PropTypes.func,
  state: React.PropTypes.object,
  form: React.PropTypes.any,
  auth: React.PropTypes.any
};

function mapStateToProps(state) {
  return {
    state,
    form: state.form,
    auth: state.authReducer
  };
}

export default connect(mapStateToProps)(Login);
