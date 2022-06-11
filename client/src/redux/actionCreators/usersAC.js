import { LOGIN_USER, CREATE_USER,UPDATE_USER, ORDER_USER, AUTH_USER, LOGOUT_USER } from "../actionsTypes/userAT";

export const loginUserAC = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const authAC = (payload) => {
  return {
    type: AUTH_USER,
    payload,
  };
};

export const createUserAC = (payload) => {
  return {
    type: CREATE_USER,
    payload,
  };
};

export const updateUserAC = (payload) => {
  return {
    type: UPDATE_USER,
    payload,
  };
};

export const logoutUserAC = (payload) => {
  return {
    type: LOGOUT_USER,
  };
}

export const orderUserAC = (payload) => {
  return {
    type: ORDER_USER,
    payload,
  }
}


