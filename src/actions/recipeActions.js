import { FETCH_RECIPES, NEW_RECIPE } from './types';

export const fetchRecipes = () => dispatch => {
  fetch('https://my-json-server.typicode.com/casvil/recipes/recipes')
    .then(res => res.json())
    .then(recipes => dispatch({
      type: FETCH_RECIPES,
      payload: recipes
    }));
}

export const createRecipe = (postData) => dispatch => {
  fetch('https://my-json-server.typicode.com/casvil/recipes/recipes', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => dispatch({
      type: NEW_RECIPE,
      payload: post
    }));
}
