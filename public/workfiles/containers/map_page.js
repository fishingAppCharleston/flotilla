/* eslint esnext: true */
import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import store from '../index';
import Search from '../components/search';
import Map from '../components/map';
import Legend from '../components/map_legend';

import { fetchLandings, searchLocation as search  } from '../actions/index';

class MapPage extends Component {

  render() {
    let { lat, lng } = this.props.map.position;
    console.log(store);
    console.log("please render")
    return (	
      <div>
        <Search onSubmit={ search } />
        <Legend />
        <Map filter={this.props.map.filters} lng={ lng } lat={ lat } />
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        map: state.map
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchLandings, search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
