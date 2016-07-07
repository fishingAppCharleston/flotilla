import { ADD_FILTER, REMOVE_FILTER } from '../actions/index';

const INITIAL_STATE = { filters: [ { } ], position: { lat: 32.7765, lng: -79.9311 } };

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
  }
  return state;
}