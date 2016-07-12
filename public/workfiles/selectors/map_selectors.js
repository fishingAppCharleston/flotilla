import lodash from 'lodash';
import { createSelector } from 'reselect';

const filtersSelector = state => state.filters;
const selectedFiltersSelector = state => state.selectedFilterIds

const getFilters = (filters, selectedFilterIds) => {
  const selectedFilters = _.filter(
    filters,
    filter => _.contains(selectedFilterIds, post.id)
  );

  return selectedFilters;
};

export default createSelector(
  filtersSelector,
  selectedFiltersSelector,
  getFilters
);
