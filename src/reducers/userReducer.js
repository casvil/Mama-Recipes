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
  return state;
}
