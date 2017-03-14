import * as types from '../constants/actionTypes/loginauth';
import request from 'superagent';
import cookie from 'react-cookie';
import { config } from '../config/config';

function loginSuccess(res) {
  return { type: types.LOGIN_USER_SUCCESS, res };
}

export function loginError(err) {
  return { type: types.LOGIN_USER_ERROR, err };
}

export function renewTokenError(err) {
  return { type: types.RENEW_TOKEN_ERROR, err };
}

export function renewTokenSuccess(err) {
  return { type: types.RENEW_TOKEN_SUCCESS, err };
}

function logoutSuccess(res) {
  return { type: types.LOGOUT_USER_SUCCESS, res };
}

export function setCleanMsg() {
  return { type: types.SET_CLEAN_MSG };
}

function setAuthToken(res) {
  return (dispatch) => {
    cookie.save('userAuth', res);
    dispatch(loginSuccess(res));
  };
}

export function checkUser(callback) {
  return (dispatch, getState) => {
    const auth = getState().authReducer.userAuth || cookie.load('userAuth');

    if (auth) {
      dispatch(loginSuccess(auth));

      if (callback) {
        callback(auth);
      }
    } else {
      if (callback) {
        callback(false);
      }
    }
  };
}

export function unsetUser() {
  return (dispatch) => {
    const userAuth = false;
    cookie.remove('userAuth');
    dispatch(logoutSuccess(userAuth));
  };
}


export function renewToken(userData, salt) {
  return (dispatch) => {
    request.post(config().loginUrl + '/token')
    .type('form')
    .set({ 'Authorization': 'Basic ' + salt })
    .send({ 'grant_type': 'refresh_token', 'refresh_token': userData.refresh_token })
    .end((err, res) => {
      if (err) {
        return dispatch(renewTokenError(err));
      }
      dispatch(renewTokenSuccess(res));
    });
  };
}

// post username and password
export function authUser(username, password) {
  return (dispatch) => {
    // moked response
    const auth = {
      token: 'mockedt0k3n0039393',
      username: 'someone',
      role: 'admin'
    };
    // mocked check that will be performed from the web service
    if (username !== 'admin' && password !== 'password') {
      return dispatch(loginError({ message: 'wrong something' }));
    }

    dispatch(setAuthToken(auth));
  };
}
