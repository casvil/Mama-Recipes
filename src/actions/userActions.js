import {
  USER_REGISTER_INIT,
  USER_REGISTER_COMPLETE,
  USER_REGISTER_FAIL,
  USER_LOG_IN_INIT,
  USER_LOG_IN_COMPLETE,
  USER_LOG_IN_FAIL,
  ERROR_NETWORK
} from './types';

const onError = err => dispatch => {};

export const registerInit = () => dispatch => {
  dispatch({
    type: USER_REGISTER_INIT
  });
};

export const register = payload => dispatch => {
  fetch('http://localhost:3090/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password
    })
  })
    .then(response => response.json())
    .then(response => {
      if (response.isOK)
        return dispatch({
          type: USER_REGISTER_COMPLETE,
          payload: response.authToken
        });
      else
        return dispatch({
          type: USER_REGISTER_FAIL,
          payload: response.err
        });
    })
    .catch(err => {
      dispatch({
        type: ERROR_NETWORK,
        payload: err
      });
    });
};
