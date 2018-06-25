import {
  USER_REGISTER_INIT,
  USER_REGISTER_COMPLETE,
  USER_REGISTER_FAIL,
  USER_LOG_IN_INIT,
  USER_LOG_IN_COMPLETE,
  USER_LOG_IN_FAIL
} from '../actions/types';

const initialState = {
  isRegistering: false,
  isRegistered: false,
  isLoggedIn: false,
  isLoggingIn: false,
  email: null,
  authToken: null,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_INIT:
      return {
        ...state,
        isRegistering: true
      };

    case USER_REGISTER_COMPLETE:
      return {
        ...state,
        isRegistering: false,
        isRegistered: true,
        authToken: action.payload
      };

    case USER_REGISTER_FAIL:
      return {
        ...state,
        isRegistered: false,
        isRegistering: false,
        error: action.payload
      };

    case USER_LOG_IN_INIT:
      return {
        ...state,
        isLoggingIn: true
      };

    case USER_LOG_IN_COMPLETE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        email: action.payload.email
      };

    case USER_LOG_IN_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        error: action.payload
      };

    default:
      return state;
  }
}
