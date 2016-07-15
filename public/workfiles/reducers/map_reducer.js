import { ADD_FILTER, REMOVE_FILTER, UPDATE_LOC_SEARCH } from '../actions/index';
// import { createSelector } from 'reselect';

const INITIAL_STATE = { search: '', filters: [ { } ], selectedFilterIds: [ ], position: { lat: 32.7765, lng: -79.9311 } };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.payload]
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filters: [state.filters.filter(
          (filter) => action.payload.type !== filter.type
        )]
      };
    case UPDATE_LOC_SEARCH:
      return {
        ...state,
        search: action.payload
      }
  }
  return state;
}