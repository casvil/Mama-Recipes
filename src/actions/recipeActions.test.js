import * as actions from './recipeActions';
import * as types from '../actions/types';

describe('recipe actions', () => {
  it('should dispatch reset search suggestions', () => {
    const expectedAction = {
      type: types.RESET_SEARCH
    };

    let retnFunc = actions.resetSearch();
    retnFunc(receivedAction => {
      console.log('RECEIVEDACTION', receivedAction);
      expect(receivedAction).toEqual(expectedAction);
    });
  });
});

// fetchRecipesInit;
// fetchRecipes;
// createRecipe;
// searchRecipes;
// resetSearch;
