import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { register } from '../actions/userActions';

class UserRegister extends Component {
  handleClick = event => {
    event.preventDefault();

    this.props.register(this.props.form.register.values);
  };
  render() {
    return (
      <div>
        <form>
          UserRegister
          <div>
            <label>Email</label>
            <Field name="email" type="email" component="input" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" type="password" component="input" />
            <button type="submit" onClick={this.handleClick}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

UserRegister.propTypes = {
  register: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  form: state.form
});

export default reduxForm({
  form: 'register',
  destroyOnUnmount: false
})(
  connect(
    mapStateToProps,
    { register }
  )(UserRegister)
);