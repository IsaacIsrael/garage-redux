import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import store from './store';

import '../assets/stylesheets/application.scss';

import CarsIndex from './containers/cars_index';
import CarsNew from './containers/cars_new';
import CarsShow from './containers/cars_show';

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsIndex} />
        <Route path="/cars/new" exact component={CarsNew} />
        <Route path="/cars/:id" exact component={CarsShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
