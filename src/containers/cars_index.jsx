import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CarsList from './car_list';
import Aside from '../components/aside';

const CarsIndex = (props) => {
  return (
    <section id="index">
      <Aside garage={props.garage} >
        <Link to="/cars/new" >Add a car</Link>
      </Aside>
      <main className="main car-wrapper">
        <CarsList garage={props.garage} />
      </main>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default connect(mapStateToProps)(CarsIndex);

