import { INIT_REVIEWS_LIST, ADD_REVIEWS, DELETE_REVIEWS,  UPDATE_REVIEWS } from '../actionsTypes/rewiewsAT'

export const initRewiewsListAC = (payload = []) => {
  return {
    type: INIT_REVIEWS_LIST,
    payload,
  };
};

export const addNewRewiewsAC = (payload = {}) => {
  return {
    type: ADD_REVIEWS,
    payload,
  };
};

export const deleteRewiewsAC = (payload = {}) => {
  return {
    type: DELETE_REVIEWS,
    payload,
  };
};

export const updateRewiewsAC = (payload = {}) => {
  return {
    type: UPDATE_REVIEWS,
    payload,
  };
};
