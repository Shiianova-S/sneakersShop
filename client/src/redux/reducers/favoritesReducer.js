import { DELETE_FAVORITE, ADD_FAVORITE, INIT_FAVORITE } from '../actionsTypes/favoriteProductsAT';

const initialState = {
  // favoriteProducts: JSON.parse(localStorage.getItem('favorite')) ?? [],
  favoriteProducts: []
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_FAVORITE:
      return { ...state, favoriteProducts: action.payload };

    case ADD_FAVORITE:
        return {
          ...state,
          favoriteProducts: [...state.favoriteProducts, action.payload],
        };

    case DELETE_FAVORITE:
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter(product => {
          return product.id !== action.payload.id;
        }),
      };

    default:
      return state;
  }
};
