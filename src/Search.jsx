import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return {
      <div className="search">
        <input className="search-input" />
        <button className="search-button" />
      </div>
    }
  }
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
