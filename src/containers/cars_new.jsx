import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Aside from '../components/aside';
import CarForm from './car_form';


class CarsNew extends Component {
  callback = (car) => {
    this.props.history.push('/');
    return car;
  }

  render() {
    return (
      <section id="new">
        <Aside garage={this.props.garage} >
          <Link to="/" >Back to list</Link>
        </Aside>
        <main className="main banner" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('/assets/images/form.jpg')" }} >
          <CarForm garage={this.props.garage} callback={this.callback} />
        </main>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default connect(mapStateToProps)(CarsNew);

