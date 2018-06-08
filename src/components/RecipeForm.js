import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createRecipe } from '../actions/recipeActions';

class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      difficulty: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const recipe = {
      name: this.state.name,
      difficulty: this.state.difficulty
    }

    this.props.createRecipe(recipe);
  }

  render() {
    return (
      <div>
        <h1>Add Recipe</h1>
        <form onSubmit={ this.onSubmit }>
          <div>
            <label>Name: </label><br />
            <input type="text" name="name" onChange={ this.onChange } value={ this.state.name } />
          </div>
          <br />
          <div>
            <label>Difficulty: </label><br />
            <textarea name="difficulty" onChange={ this.onChange } value={ this.state.difficulty } />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

RecipeForm.propTypes = {
  createRecipe: PropTypes.func.isRequired
}

export default connect(null, { createRecipe })(RecipeForm);
