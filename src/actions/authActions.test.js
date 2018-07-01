import * as types from './types';
import mockData from '../mocks/auth.json';
import * as authActions from './authActions.js';

describe('auth actions', () => {
  it('should dispatch an authRequest', () => {
    const expectedAction = {
      type: types.AUTH_USER_REQUEST,
      payload: mockData.email
    };

    let retnFunc = authActions.authRequest(mockData.email);
    retnFunc(receivedAction => {
      expect(receivedAction).toEqual(expectedAction);
    });
  });
});
