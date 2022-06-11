import { INIT_REVIEWS_LIST, ADD_REVIEWS } from "../actionsTypes/rewiewsAT";

const initialState = { comment: [], currentComment: {}};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEWS:
      const newReview = action.payload;

      return {
        ...state,
        comment: [...state.comment, ...newReview]
      };

    case INIT_REVIEWS_LIST:
      return { ...state, comment: action.payload };

    // case DELETE_REVIEWS:
    //   return {
    //     ...state,
    //     products: state.reviews.filter(reviews => reviews.id !== Number(action.payload)),
    //   };

    // case UPDATE_REVIEWS:
    //   const updatedProduct = action.payload;
    //   return {
    //     ...state,
    //     products: state.products.map(el => {
    //       if (el.id === action.payload.id) {
    //         return {
    //           name: updatedProduct.name,
    //           description: updatedProduct.description,
    //           price: updatedProduct.price,
    //           photo: updatedProduct.photo,

    //         };
    //       } else {
    //         return el;
    //       }
    //     }),
    //   };

    default:
      return state;
  }
};
