import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers';
// import fetchShelters from './actions';

import Home from './Home';
import Results from './Results';
import './index.css';

class ShelterFinder {

  constructor() {
    this.loggerMiddleware = createLogger();
    this.store = createStore(
      mainReducer,
          applyMiddleware(
              thunkMiddleware,
              this.loggerMiddleware
          )
      );

    this.store.dispatch({
      type: 'FETCH_SHELTERS',
    });

    this.render();
  }

  render() {
    ReactDOM.render(
      <Provider store={this.store}>
        <Router history={browserHistory}>
            <Route path='/' component={Home}/>
            <Route path='/results' component={Results}/>
            <Route path='/shelter/:id' component={Shelter}/>
        </Router>

      </Provider>,
      document.getElementById('root')
    );
  }
}

const shelterFinder = new ShelterFinder();



