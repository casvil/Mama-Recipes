import * as actions from './recipeActions';
import * as types from '../actions/types';

describe('recipe actions', () => {
  it('should dispatch FETCH_RECIPES_REQUEST', () => {
    const expectedAction = {
      type: types.FETCH_RECIPES_REQUEST
    };

    let retnFunc = actions.fetchRecipesRequest();
    retnFunc(receivedAction => {
      expect(receivedAction).toEqual(expectedAction);
    });
  });

  it('should dispatch reset search suggestions', () => {
    const expectedAction = {
      type: types.RESET_SEARCH
    };

    let retnFunc = actions.resetSearch();
    retnFunc(receivedAction => {
      expect(receivedAction).toEqual(expectedAction);
    });
  });
});

// it ('should fetchRecipes', () => {});
// it ('should createRecipe', () => {});
// it ('should searchRecipes', () => {});
