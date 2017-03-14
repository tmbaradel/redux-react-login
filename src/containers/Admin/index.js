import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'redux-router';
import FormButton from '../../components/FormButton/FormButton';
import { unsetUser } from '../../actions/loginActions';

class Admin extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidUpdate() {
    const { auth, dispatch } = this.props;
    if (!auth.userAuth.token || auth.userAuth.token === '') {
      dispatch(push('/'));
    }
  }

  handleLogout() {
    const { dispatch } = this.props;
    dispatch(unsetUser());
  }

  render() {
    return (
      <div className="admin">
        <h1>THIS IS PROTECTED FROM AUTH COMPONENT</h1>
        <FormButton
            id="loginButton"
            name="loginButton"
            className="form-button"
            type="submit"
            disabled={false}
            onClickButton={ this.handleLogout }>LOGOUT
        </FormButton>
      </div>
    );
  }
}

Admin.propTypes = {
  state: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  auth: React.PropTypes.any
};

function mapStateToProps(state) {
  return {
    state,
    auth: state.authReducer
  };
}

export default connect(mapStateToProps)(Admin);
