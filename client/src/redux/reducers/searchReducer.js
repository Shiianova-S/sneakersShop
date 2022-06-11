import {  INIT_SEARCH_LIST, DELETE_SEARCH_LIST, INIT_RESULTS } from '../actionsTypes/searchAT';

const initialState = { search: [], searchResults: [] };

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SEARCH_LIST:
      return { ...state, search: action.payload };

    case INIT_RESULTS:
      return { ...state, searchResults: [...state.search] };

    case DELETE_SEARCH_LIST:
      return { ...state, search: [] };

    default:
      return state;
  }
};
