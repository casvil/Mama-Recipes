import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import { authRequest, signUp } from '../../actions/authActions';
import { routerHome } from '../../actions/routerActions';

class SignUp extends Component {
  handleClick = event => {
    event.preventDefault();

    this.props.authRequest(this.props.form.signUp.values.email);
    this.props.signUp(this.props.form.signUp.values, () =>
      this.props.routerHome()
    );
  };
  render() {
    return (
      <div>
        <form>
          SignUp
          <div>
            <label>Email</label>
            <Field name="email" type="email" component="input" />
          </div>
          <div>
            <label>Password</label>
            <Field
              name="password"
              type="password"
              autoComplete="none"
              component="input"
            />
            <button type="submit" onClick={this.handleClick}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  routerHome: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  form: state.form
});

export default reduxForm({
  form: 'signUp'
})(
  connect(
    mapStateToProps,
    { authRequest, signUp, routerHome }
  )(SignUp)
);
