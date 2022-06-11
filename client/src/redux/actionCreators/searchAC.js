import { INIT_SEARCH_LIST, DELETE_SEARCH_LIST, INIT_RESULTS } from '../actionsTypes/searchAT';

export const initSearchListAC = payload => {
  return {
    type: INIT_SEARCH_LIST,
    payload,
  };
};

export const deleteSearchListAC = payload => {
  return {
    type: DELETE_SEARCH_LIST,
    payload,
  };
};

export const initResultsAC = payload => {
  return {
    type: INIT_RESULTS,
    payload,
  };
};
