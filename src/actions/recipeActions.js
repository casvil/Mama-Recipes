import {
  FETCH_RECIPES,
  NEW_RECIPE,
  SEARCH_RECIPE,
  RESET_SEARCH,
  ERROR_NETWORK
} from './types';

const onError = err => console.log(err);

export const fetchRecipes = () => dispatch => {
  fetch('https://my-json-server.typicode.com/casvil/recipes/db')
    .then(res => res.json())
    .then(recipes =>
      dispatch({
        type: FETCH_RECIPES,
        payload: recipes
      })
    )
    .catch(err => onError(err));
};

export const createRecipe = recipeData => dispatch => {
  fetch('http://localhost:3090/recipe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: recipeData.authToken
    },
    body: JSON.stringify(recipeData)
  })
    .then(res => res.json())
    .then(recipe =>
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
