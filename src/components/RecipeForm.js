import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../css/typography.css';
import './recipeForm.css';
import { createRecipe } from '../actions/recipeActions';

class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 'fake-json-server-id',
      name: '',
      ingredients: [],
      steps: [],
      img: '',
      video: '',
      difficulty: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const recipe = {
      id: this.state.id,
      name: this.state.name,
      ingredients: this.state.ingredients,
      steps: this.state.steps,
      img: this.state.img,
      video: this.state.video,
      difficulty: this.state.difficulty
    };

    this.props.createRecipe(recipe);
  };

  render() {
    return (
      <div className="recipeForm">
        <h1 className="h1-title">Add Recipe</h1>
        <div className="form__wrapper">
          <form className="form" onSubmit={this.onSubmit}>
            <div className="form__input">
              <label className="form__label">Name</label>
              <input
                type="text"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
              />
            </div>
            <div className="form__input">
              <label className="form__label">Difficulty</label>
              <input
                type="text"
                name="difficulty"
                onChange={this.onChange}
                value={this.state.difficulty}
              />
            </div>
            <button type="submit" className="form__input">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

RecipeForm.propTypes = {
  createRecipe: PropTypes.func.isRequired
};

export default connect(
  null,
  { createRecipe }
)(RecipeForm);
