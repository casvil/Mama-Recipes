import {
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  USER_SIGN_OUT
} from './types';

export const authRequest = email => dispatch => {
  dispatch({
    type: AUTH_USER_REQUEST,
    payload: email
  });
};

export const signUp = ({ email, password }, redirect) => dispatch => {
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
          type: AUTH_USER_SUCCESS,
          payload: res.authToken
        });
        redirect();
      }
    })
    .catch(err => {
      dispatch({
        type: AUTH_USER_FAILURE,
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
          type: AUTH_USER_SUCCESS,
          payload: res.authToken
        });

        localStorage.setItem('authToken', res.authToken);

        redirect();
      }
    })
    .catch(err => {
      dispatch({
        type: AUTH_USER_FAILURE,
        payload: err
      });
    });
};

export const signOut = () => dispatch => {
  localStorage.removeItem('authToken');

  dispatch({
    type: USER_SIGN_OUT
  });
};
