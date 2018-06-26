import {
  FETCH_RECIPES_INIT,
  FETCH_RECIPES_COMPLETE,
  FETCH_RECIPES_FAIL,
  NEW_RECIPE,
  SEARCH_RECIPE,
  RESET_SEARCH,
  ERROR_NETWORK
} from './types';

export const fetchRecipesInit = () => dispatch => {
  dispatch({
    type: FETCH_RECIPES_INIT
  });
};

export const fetchRecipes = () => dispatch => {
  fetch('http://localhost:3090/recipe')
    .then(res => res.json())
    .then(res => {
      if (res.isOK)
        return dispatch({
          type: FETCH_RECIPES_COMPLETE,
          payload: res.items
        });
      else
        return dispatch({
          type: FETCH_RECIPES_FAIL,
          payload: res.err
        });
    })
    .catch(err =>
      dispatch({
        type: ERROR_NETWORK,
        payload: err
      })
    );
};

export const createRecipe = (recipeData, authToken) => dispatch => {
  fetch('http://localhost:3090/recipe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: authToken
    },
    body: JSON.stringify(recipeData)
  })
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: NEW_RECIPE,
        payload: recipeData
      })
    );
  // .catch(err => console.warn(err));
};

export const searchRecipes = inputSearch => dispatch => {
  dispatch({
    type: SEARCH_RECIPE,
    payload: inputSearch
  });
};

export const resetSearch = () => dispatch => {
  dispatch({
    type: RESET_SEARCH
  });
};
