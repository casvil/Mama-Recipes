import React from 'react';

export const Recipe = props => {
  return (
    <div className="recipes__recipe" key={props.recipe._id}>
      <h3 className="recipe__name">{props.recipe.name}</h3>
      <ul className="recipe__ingredientList">
        {props.recipe.ingredients.map((ingredient, id) => (
          <li className="recipe__ingredient" key={id}>
            {ingredient}
            {id}
          </li>
        ))}
      </ul>
    </div>
  );
};
