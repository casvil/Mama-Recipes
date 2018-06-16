import {
  FETCH_RECIPES,
  NEW_RECIPE,
  SEARCH_RECIPE,
  RESET_SEARCH
} from './types';

export const fetchRecipes = () => dispatch => {
  fetch('https://my-json-server.typicode.com/casvil/recipes/recipes')
    .then(res => res.json())
    .then(recipes =>
      dispatch({
        type: FETCH_RECIPES,
        payload: recipes
      })
    )
    .catch(err => onError(err));
};

const onError = err => console.log(err);

export const createRecipe = recipeData => dispatch => {
  fetch('https://my-json-server.typicode.com/casvil/recipes/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipeData)
  })
    .then(res => res.json())
    .then(recipe =>
      dispatch({
        type: NEW_RECIPE,
        payload: recipe
      })
    )
    .catch(err => console.warn(err));
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
