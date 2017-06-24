import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShelters } from './actions';
import Test from './Test';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World!</h2>
        <Test />
      </div>
    );
  }
}

// export default App;

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShelters: dispatch(fetchShelters()),
    };
}


export default connect(
    null,
    mapDispatchToProps
)(App);
