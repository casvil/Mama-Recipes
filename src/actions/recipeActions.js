import { FETCH_RECIPES, NEW_RECIPE } from './types';

export const fetchRecipes = () => dispatch => {
  fetch('https://my-json-server.typicode.com/casvil/recipes/recipes')
    .then(res => res.json())
    .then(recipes => dispatch({
      type: FETCH_RECIPES,
      payload: recipes
    }));
}

export const createRecipe = (recipeData) => dispatch => {
  fetch('https://my-json-server.typicode.com/casvil/recipes/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipeData)
  })
    .then(res => res.json())
    .then(recipe => dispatch({
      type: NEW_RECIPE,
      payload: recipe
    }));
}
