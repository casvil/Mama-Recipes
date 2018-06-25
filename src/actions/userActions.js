import {
  USER_REGISTER_COMPLETE
  // USER_LOG_IN_COMPLETE
} from './types';

const onError = err => console.log('el error: ', err);

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
    .then(res => res.json())
    .then(authToken => {
      dispatch({
        type: USER_REGISTER_COMPLETE,
        payload: authToken
      });
    })
    .catch(err => onError(err));
};
