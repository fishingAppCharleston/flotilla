import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import navBar from '../components/navbar';
import Map from '../components/map';
import Legend from '../components/map_legend';

import { fetchLandings, searchLocation as search  } from '../actions/index';

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }


class MapPage extends Component {

  render() {
    return (	
      <div>
        <navbar />
        <Legend onSubmit={ search } />
        <Map filter={this.props.map.filters} lng={this.props.map.lng} lat={this.props.map.lat} />
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        map
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchLandings, search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
