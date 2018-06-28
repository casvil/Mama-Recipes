import {
  USER_REGISTER_INIT,
  USER_REGISTER_COMPLETE,
  USER_REGISTER_FAIL,
  USER_SIGN_IN_INIT,
  USER_SIGN_IN_COMPLETE,
  USER_SIGN_IN_FAIL,
  USER_SIGN_OUT,
  ERROR_NETWORK
} from '../actions/types';

const initialState = {
  isLoggedIn: false,
  isRegistered: false,
  isFetchingData: false,
  email: null,
  authToken: null,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_INIT:
      return {
        ...state,
        isFetchingData: true
      };

    case USER_REGISTER_COMPLETE:
      return {
        ...state,
        isFetchingData: false,
        isRegistered: true,
        authToken: action.payload
      };

    case USER_REGISTER_FAIL:
      return {
        ...state,
        isRegistered: false,
        isFetchingData: false,
        error: action.payload
      };

    case USER_SIGN_IN_INIT:
      return {
        ...state,
        email: action.payload,
        isFetchingData: true
      };

    case USER_SIGN_IN_COMPLETE:
      return {
        ...state,
        isLoggedIn: true,
        isFetchingData: false,
        authToken: action.payload
      };

    case USER_SIGN_IN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isFetchingData: false,
        error: action.payload
      };

    case USER_SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
        authToken: ''
      };

    case ERROR_NETWORK:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
