import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signInInit, signIn } from '../actions/userActions';
import { routerHome } from '../actions/routerActions';
import PropTypes from 'prop-types';

const validate = values => {
  const errors = {};

  if (!values.email) errors.email = 'Required';
  if (!values.password) errors.password = 'Required';
  return errors;
};

// the following function deconstructs the received params and renders
// an input with props and if some parameters are true displays an span
const renderInput = ({ input, meta, label, type }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} {...input} />
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.signInInit(this.props.form.login.values.email);
    this.props.signIn(this.props.form.login.values, () => {
      this.props.routerHome();
    });
  };
  render() {
    return (
      <form>
        Login
        <Field
          name="email"
          type="email"
          label="Email"
          component={renderInput}
        />
        <Field
          name="password"
          type="password"
          label="Password"
          component={renderInput}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
        {/* <button type="submit" disabled={submitting}> */}
      </form>
    );
  }
}

Login.propTypes = {
  signIn: PropTypes.func.isRequired,
  routerHome: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  form: state.form
});

export default reduxForm({ form: 'login', validate })(
  connect(
    mapStateToProps,
    { signInInit, signIn, routerHome }
  )(Login)
);
