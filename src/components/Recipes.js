import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './recipes.css';
import { fetchRecipes } from '../actions/recipeActions';

class Recipes extends Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newRecipe) {
      this.props.recipes.unshift(nextProps.newRecipe);
    }
  }

  render() {
    const recipeItems = this.props.recipes.map(recipe => (
      <div className="recipes__recipe" key={recipe.id}>
        <h3 className="recipe__name">{recipe.name}</h3>
        <ul className="recipe__ingredients">
          {recipe.ingredients.map((ingredient, id) => (
            <li key={id}>{ingredient}</li>
          ))}
        </ul>
      </div>
    ));

    return (
      <div className="recipes">
        <h1 className="recipes__header">Recipes</h1>
        <div className="recipes__body">{recipeItems}</div>
      </div>
    );
  }
}

Recipes.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
  newRecipe: PropTypes.object
};

const mapStateToProps = state => ({
  // recipeReducer is called recipes in combineRecuders
  recipes: state.recipes.items,
  newRecipe: state.recipes.item
});

export default connect(
  mapStateToProps,
  { fetchRecipes }
)(Recipes);
