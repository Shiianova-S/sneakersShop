import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { usersReducer } from './usersReducer';
import { reviewsReducer } from './reviewsReducer';
import { ordersReducer } from './ordersReducer';
import { searchReducer } from './searchReducer';
import { favoritesReducer } from './favoritesReducer';

export const rootReducer = combineReducers({
  productsReducer,
  reviewsReducer,
  cartReducer,
  usersReducer,
  ordersReducer,
  searchReducer,
  favoritesReducer,
});
