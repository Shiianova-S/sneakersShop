import { INIT_CURRENT_PRODUCT_CARD, SORT_PRODUCTS_LIST, RETURN_ORDER_IN_STOK, RETURN_PRODUCT_IN_STOK, FILTER_PRODUCTS_LIST, CHANGE_PRODUCT_STATUS, INIT_PRODUCTS_LIST, DELETE_PRODUCT, UPDATE_PRODUCT_IN_STOK, UPDATE_PRODUCT} from '../actionsTypes/productsAT';


const initialState = { products: [], currentProduct: {}, productsFilter: [], sortFilter: [] };

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_IN_STOK:

      const copyProduct = [...state.products];
      const prod = copyProduct.find(el => el.id === action.payload.id);
      return {
        ...state,
        products: prod.SizesOfProducts.map(el => {
          if((el.sizeNumber === action.payload.size) &&  (el.itemsLeft >= 1)) {
            return el.itemsLeft - 1
          }
          return el;
        })
      };

      case RETURN_PRODUCT_IN_STOK:

        const copyProductReturn = [...state.products];
        const prodReturn = copyProductReturn.find(el => el.id === action.payload.id);
        if(prodReturn) {
          return {
            ...state,
            products: prodReturn.SizesOfProducts.map(el => {
              if (el.sizeNumber === action.payload.size) {
                return el.itemsLeft + 1
              }
              return el;
            }),
        }} else {
          return {
          ...state,
          products: [...state.products, action.payload],
        };
      }

      case RETURN_ORDER_IN_STOK:

        const copyOrder = [...state.products];
        const copyOrderReturn = copyOrder.find(el => el.id === action.payload.id);
        if(prodReturn) {
          return {
            ...state,
            products: copyOrderReturn.SizesOfProducts.map(el => {
              if (el.sizeNumber === action.payload.size) {
                return el.itemsLeft + action.payload.numberOfItems
              }
              return el;
            }),
        }} else {
          return {
          ...state,
          products: [...state.products, action.payload],
        };
      }

    case INIT_PRODUCTS_LIST:
      return { ...state, products: action.payload, productsFilter: action.payload, sortFilter: action.payload};

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== Number(action.payload)),
      };

// моё тут начинается (Игорь)
    case FILTER_PRODUCTS_LIST:
      return {
        ...state,
        productsFilter: state.products.filter(product => {
          if (action.payload === 'none') { return state.products }
          else { return product.gender === action.payload}
        }),
      };

    case SORT_PRODUCTS_LIST:
      return {
        ...state,
        sortFilter: state.products.sort((prev, next) => {
         if (action.payload === 'up') return prev.price - next.price;
         if (action.payload === 'down') return next.price - prev.price;
         if (action.payload === 'upRating') return prev.rating - next.rating;
         if (action.payload === 'downRating') return next.rating - prev.rating;
        }),
      };
// моё тут кончается

    case INIT_CURRENT_PRODUCT_CARD:
      return {
        ...state,
        currentProduct: action.payload,
      };

    case UPDATE_PRODUCT:
      const updatedProduct = action.payload;
      return {
        ...state,
        products: state.products.map(el => {
          if (el.id === action.payload.id) {
            return {
              name: updatedProduct.name,
              description: updatedProduct.description,
              price: updatedProduct.price,
              photo: updatedProduct.photo,

            };
          } else {
            return el;
          }
        }),
      };

      case CHANGE_PRODUCT_STATUS:
        return {
          ...state,
          products: state.products.filter(product => product.id === Number(action.payload)),
        };


    default:
      return state;
  }
};
