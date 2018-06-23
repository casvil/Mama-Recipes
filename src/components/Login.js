import React from 'react';
import { reduxForm, Field } from 'redux-form';

const validate = values => {
  const errors = {};

  if (!values.email) errors.email = 'Required';
  if (!values.password) errors.password = 'Required';
  return errors;
};

// the following function deconstructs the received params and renders
// an input with props and if some parameters are true displays an span
const renderInput = ({ input, meta, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
  );
};

// let Login = ({ handleSubmit, submitting }) => {
let Login = () => {
  return (
    // <form onSubmit={handleSubmit()}>
    <form>
      Login
      <Field name="email" label="Email" component={renderInput} />
      <Field name="password" label="Password" component={renderInput} />
      <button type="submit">Submit</button>
      {/* <button type="submit" disabled={submitting}> */}
    </form>
  );
};

export default reduxForm({ form: 'login', destroyOnUnmount: false, validate })(
  Login
);
