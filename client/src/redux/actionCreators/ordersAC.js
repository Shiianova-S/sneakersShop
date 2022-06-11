import { INIT_ORDERS, DELETE_ORDER, ADD_ORDER } from '../actionsTypes/ordersAT';

export const initOrderListAC = payload => {
  return {
    type: INIT_ORDERS,
    payload,
  };
};

export const deleteOrderAC = payload => {
  return {
    type: DELETE_ORDER,
    payload,
  };
};

export const addOrderAC = payload => {
  return {
    type: ADD_ORDER,
    payload,
  };
};
