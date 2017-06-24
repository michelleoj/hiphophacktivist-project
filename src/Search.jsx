import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="search">
        <input className="search-input" />
        <select className="search-select">
          <option>Manhattan</option>
          <option>Brooklyn</option>
          <option>Queens</option>
          <option>Staten Island</option>
          <option>Bronx</option>
        </select>
        <button className="search-button" />
      </form>
    );
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchQuery: (query) => {
      dispatch();
    },
  };
};

export default connect(
    null,
    mapDispatchToProps
)(Search);
