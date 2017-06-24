import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShelters } from './actions';
import Search from './Search';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);

    // fetch the shelters
    this.props.fetchShelters();
  }

  render() {
    return (
      <div className="Home">
        <header>
          <h1>NYC Shelter Search</h1>
        </header>
        <main>
          <Search />
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchShelters: (query) => {
        dispatch(fetchShelters(query));
      },
  };
}


export default connect(
    null,
    mapDispatchToProps
)(Home);
