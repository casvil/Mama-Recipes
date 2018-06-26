import {
  USER_REGISTER_INIT,
  USER_REGISTER_COMPLETE,
  USER_REGISTER_FAIL,
  USER_SIGN_IN_INIT,
  USER_SIGN_IN_COMPLETE,
  USER_SIGN_IN_FAIL
} from './types';

export const registerInit = () => dispatch => {
  dispatch({
    type: USER_REGISTER_INIT
  });
};

export const signInInit = email => dispatch => {
  dispatch({
    type: USER_SIGN_IN_INIT,
    payload: email
  });
};

export const register = ({ email, password }, redirect) => dispatch => {
  fetch('http://localhost:3090/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(res => {
      if (res.isOK) {
        dispatch({
          type: USER_REGISTER_COMPLETE,
          payload: res.authToken
        });
        redirect();
      }
    })
    .catch(err => {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: err
      });
    });
};

export const signIn = ({ email, password }, redirect) => dispatch => {
  fetch('http://localhost:3090/signin', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(res => {
      if (res.isOK) {
        dispatch({
          type: USER_SIGN_IN_COMPLETE,
          payload: res
        });
        redirect();
      }
    })
    .catch(err => {
      dispatch({
        type: USER_SIGN_IN_FAIL,
        payload: err
      });
    });
};
