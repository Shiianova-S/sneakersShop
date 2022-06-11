import { INIT_PRODUCT_CART, ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, DELETE_PRODUCT_CART, CLEAR_CART } from '../actionsTypes/cartAT';

const initialState = {
  cartProducts: JSON.parse(localStorage.getItem('cart')) || [],
  
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_PRODUCT_CART:
      return { ...state, cartProducts: action.payload };

    case ADD_PRODUCT_CART:
      const copyCart = [...state.cartProducts];

      const addedProduct = copyCart.find(
        product => (product.id === action.payload.id) && (product.size === action.payload.size)
      );
      if (addedProduct) {
        return {
          ...state,
          cartProducts: copyCart.map(product => {
            if ((product.id === action.payload.id) && (product.size === action.payload.size)) {
              return { ...product, numberOfItems: product.numberOfItems + 1 };
            }
            return product;
          }),
        };
      } else {
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.payload],
        };
      }

    case REMOVE_PRODUCT_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.map(product => {
          if ((product.id === action.payload.id) 
          && (product.size === action.payload.size) 
          && (product.numberOfItems >= 1)) {
            return { ...product, numberOfItems: product.numberOfItems - 1 };
          }
          return product;
        }),
      };

    case DELETE_PRODUCT_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(product => {
          if ((product.id === action.payload.id) 
          && (product.size === action.payload.size)) {
          return product.id !== action.payload.id;
          } return product;
        })
      };

    case CLEAR_CART:
      return {
        ...state,
        cartProducts: [],
      };


    default:
      return state;
  }
};
