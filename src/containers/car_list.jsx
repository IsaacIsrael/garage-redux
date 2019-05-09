import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';

import Car from '../components/car';

class CarsList extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCar = car => (
    <li key={car.id}>
      <Car info={car} />
      <Link to={`/cars/${car.id}`} />
    </li>
  );

  render() {
    return (
      <ul className="car-list">
        {this.props.cars.map(this.renderCar)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
  };
}

function mapDispatchToPropos(dispatch) {
  return bindActionCreators(
    {
      fetchCars
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToPropos)(CarsList);
