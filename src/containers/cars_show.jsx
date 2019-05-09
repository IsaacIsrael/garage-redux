import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchCar, removeCar } from '../actions';

import Aside from '../components/aside';
import Car from '../components/car';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.removeCar(this.props.match.params.id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <section id="show">
        <Aside garage={this.props.garage} >
          <Link to="/" >Back to list</Link>
        </Aside>
        <main className="main car-wrapper">
          { this.props.car ?
            <Car info={this.props.car} >
              <button className="delete" onClick={this.handleClick} >
                <span className="glyphicon glyphicon-trash" aria-hidden="true" />
                <span>Delete</span>
              </button>
            </Car>
            : undefined
          }
        </main>
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  return {
    garage: state.garage,
    car: state.cars.find(car => car.id === id)
  };
}

function mapDispatchToState(dispatch) {
  return bindActionCreators(
    { fetchCar, removeCar },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToState)(CarsShow);
