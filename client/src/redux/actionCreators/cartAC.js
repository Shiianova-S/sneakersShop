import { INIT_PRODUCT_CART, ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, DELETE_PRODUCT_CART, CLEAR_CART} from '../actionsTypes/cartAT';

export const initProductCartAC = (payload) => {
  return {
    type: INIT_PRODUCT_CART,
    payload,
  }
};

export const addProductCartAC = (payload) => {
  return {
    type: ADD_PRODUCT_CART,
    payload,
  }
};

export const removeProductCartAC = (payload) => {
  return {
    type: REMOVE_PRODUCT_CART,
    payload,
  }
};

export const deleteProductCartAC = (payload) => {
  return {
    type: DELETE_PRODUCT_CART,
    payload,
  }
};

export const clearProductCartAC = (payload) => {
  return {
    type: CLEAR_CART,
    payload,
  }
};

