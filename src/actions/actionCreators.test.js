import * as actions from './recipeActions';
import * as types from '../actions/types';

describe('actions', () => {
  it('should return a function which returns an action to reset search suggestions', () => {
    const expectedAction = {
      type: types.RESET_SEARCH
    };

    let retnFunc = actions.resetSearch();
    retnFunc(receivedAction => {
      expect(receivedAction).toEqual(expectedAction);
    });
  });
});
