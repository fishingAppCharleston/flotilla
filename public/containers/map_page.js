import React, { Component, } from 'react';
import { connect } from 'react-redux';

import { navBar } from 'navbar';
import Map from from 'map';

import { fetchLandings } from '../actions/index';

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }


class MapPage extends Component {

  render() {
    return (

      <div className="text-xs-right">
        <div>A map 'n' stuff</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        landings: state.landings
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchLandings, search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
