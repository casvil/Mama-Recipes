import {
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  USER_SIGN_OUT,
  ERROR_NETWORK
} from '../actions/types';

const initialState = {
  authenticated: '',
  errorMessage: '',
  isFetchingData: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_REQUEST:
      return {
        ...state,
        isFetchingData: true
      };

    case AUTH_USER_SUCCESS:
      return {
        ...state,
        authenticated: action.payload,
        isFetchingData: false
      };

    case AUTH_USER_FAILURE:
      return {
        ...state,
        isFetchingData: false,
        errorMessage: action.payload
      };

    case USER_SIGN_OUT:
      return {
        ...state,
        authenticated: ''
      };

    case ERROR_NETWORK:
      return {
        ...state,
        errorMessage: action.payload
      };

    default:
      return state;
  }
}
