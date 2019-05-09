import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { createCar } from '../actions';

class CarForm extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, this.props.callback);
  }

  required = (value) => {
    return value ? undefined : 'Required';
  }

  plate = (value) => {
    console.log(value);
    return value && !/^[A-Z0-9]{3}-[A-Z0-9]{4}$/i.test(value) ? 'Invalid plate' : undefined;
  }

  renderField = (field) => {
    const { error } = field.meta;
    return (
      <div className={`form-group ${error ? ' has-error has-feedback' : ''}`}>
        <label className="control-label" htmlFor={field.label}>{field.label}</label>
        <input
          component="input"
          placeholder={field.placeholder}
          className="form-control"
          type="text"
          {...field.input}
        />
        <span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true" />
        {error && <span className="help-block">{error}</span>}
      </div>
    );
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field label="Brand" name="brand" placeholder="Aston Martin" component={this.renderField} validate={[this.required]} />
        <Field label="Model" name="model" placeholder="DB Mark III" component={this.renderField} validate={[this.required]} />
        <Field label="Brand" name="owner" placeholder="James Bond" component={this.renderField} validate={[this.required]} />
        <Field label="Plate" name="plate" placeholder="EGU-503H" component={this.renderField} validate={[this.required, this.plate]} />
        <button type="submit" disabled={this.props.invalid} >Add car</button>
      </form>
    );
  }
}

export default reduxForm({ form: 'carForm' })(
  connect(null, { createCar })(CarForm)
);

