import {
  USER_REGISTER_INIT,
  USER_REGISTER_COMPLETE,
  USER_REGISTER_FAIL,
  USER_SIGN_IN_INIT,
  USER_SIGN_IN_COMPLETE,
  USER_SIGN_IN_FAIL,
  ERROR_NETWORK
} from './types';

export const registerInit = () => dispatch => {
  dispatch({
    type: USER_REGISTER_INIT
  });
};

export const signInInit = () => dispatch => {
  dispatch({
    type: USER_SIGN_IN_INIT
  });
};

export const register = ({ email, password }) => dispatch => {
  fetch('http://localhost:3090/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(res => {
      if (res.isOK)
        return dispatch({
          type: USER_REGISTER_COMPLETE,
          payload: res.authToken
        });
      else
        return dispatch({
          type: USER_REGISTER_FAIL,
          payload: res.err
        });
    })
    .catch(err => {
      dispatch({
        type: ERROR_NETWORK,
        payload: err
      });
    });
};

export const signIn = ({ email, password }) => dispatch => {
  fetch('http://localhost:3090/signin', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if (res.isOK)
        return dispatch({
          type: USER_SIGN_IN_COMPLETE,
          payload: res
        });
      else console.log(res);
      return dispatch({
        type: USER_SIGN_IN_FAIL,
        payload: res.err
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR_NETWORK,
        payload: err
      });
    });
};
