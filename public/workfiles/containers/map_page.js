import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Search from '../components/search';
import Map from '../components/map';
import Legend from '../components/map_legend';

import { fetchLandings, searchLocation as search, updateInput } from '../actions/index';

class MapPage extends Component {

  render() {
    let { lat, lng } = this.props.map.position;
    let { filters, search } = this.props.map;
    
    return (	
      <div>
        <Search onSubmit={ search } input={search} updateSearch={ updateInput } />
        <Legend />
        <Map filter={filters} lng={ lng } lat={ lat } />
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
    return bindActionCreators({ fetchLandings, search, updateInput}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
