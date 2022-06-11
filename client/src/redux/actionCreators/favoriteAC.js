import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  INIT_FAVORITE,
} from "../actionsTypes/favoriteProductsAT";

export const initFavoriteProduct = (payload) => {
  return {
    type: INIT_FAVORITE,
    payload,
  };
};

export const deleteFavoritProduct = (payload) => {
  return {
    type: DELETE_FAVORITE,
    payload,
  };
};

export const addFavoritProduct = (payload) => {
  return {
    type: ADD_FAVORITE,
    payload,
  };
};
