export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  filter,
});

export const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter,
});

export const clearFilter = {
  type: CLEAR_FILTER,
};
