import * as types from './types';
import mockData from '../mocks/auth.json';
import * as authActions from './authActions.js';
import mockLocalStorage from '../helpers/mockLocalStorage';

describe('auth actions', () => {
  it('should dispatch AUTH_USER_REQUEST', () => {
    const expectedAction = {
      type: types.AUTH_USER_REQUEST,
      payload: mockData.email
    };

    let retnFunc = authActions.authRequest(mockData.email);
    retnFunc(receivedAction => {
      expect(receivedAction).toEqual(expectedAction);
    });
  });

  // it('should dispatch AUTH_USER_COMPLETE after /signup isOK and save authToken in Local Storage', () => {};
  // it('should dispatch AUTH_USER_COMPLETE after /signin isOK and save authToken in Local Storage', () => {};
  // it('should dispatch AUTH_USER_FAILURE after /signup error response', () => {};
  // it('should dispatch AUTH_USER_FAILURE after /signin error response', () => {};

  it('should dispatch USER_SIGN_OUT and remove authToken from Local Storage', () => {
    const expectedAction = {
      type: types.USER_SIGN_OUT
    };

    // mock the localStorage
    window.localStorage = mockLocalStorage();
    // mock the sessionStorage
    window.sessionStorage = mockLocalStorage();

    let retnFunc = authActions.signOut();
    retnFunc(receivedAction => {
      expect(receivedAction).toEqual(expectedAction);
    });
  });
});
