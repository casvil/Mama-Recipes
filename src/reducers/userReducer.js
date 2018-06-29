import {
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE
} from '../actions/types';

const initialState = {
  email: '',
  username: '',
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
        email: action.payload,
        isFetchingData: false
      };

    case AUTH_USER_FAILURE:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };

    default:
      return state;
  }
}
