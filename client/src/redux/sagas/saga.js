import { call, put, takeEvery } from "redux-saga/effects";
import {
  loginUserAC,
  createUserAC,
  updateUserAC,
  logoutUserAC,
  orderUserAC
} from "../actionCreators/usersAC";

// import {
//   updateProductCardAC,
//   initCurrentProductCardAC,
// } from "../actionCreators/productsAC";

async function fetchData({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body });
  return await response.json();
}

function* postUserWorker(action) {
  const newUser = yield call(fetchData, {
    url: "/signup",
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    credentials: "include",
    body: JSON.stringify(action.payload),
  });
  yield put(createUserAC(newUser));
  // if(newUser.success) {
  //   localStorage.setItem('user', JSON.stringify(newUser))
  // }
}

function* loginUserAsync(action) {
  // console.log(action);
  const user = yield call(fetchData, {
    url: "/signin",
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    credentials: "include",
    body: JSON.stringify(action.payload),
  });

  yield put(loginUserAC(user));
  console.log(user, 'user saga');
  // if (user.success) {
  //   localStorage.setItem("user", JSON.stringify(user));
  
  // } 
}


function* orderSendWorker(action) {
  const status = yield call(fetchData,{
    url:'/order',
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(action.payload),
  })
  yield put(orderUserAC(status))
}

function* putUserWorker(action) {
  const user = yield call(fetchData, {
    url: `/users/${action.payload.id}`,
    method: "PUT",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(action.payload.body),
  });
  yield put(updateUserAC(user));
}


// function* getUserProductsWorker(action) {
//   const userProducts = yield call(fetchData, {
//     url: `/users/order/${action.payload.id}`,
//     // headers: {
//     //   "Content-Type": "Application/json",
//     // },
//   });
//   yield put(getUserProductsAC(userProducts));
// }


// function* putProductWorker(action) {
//   const product = yield call(fetchData, {
//     url: `/products/edit/${action.payload.id}`,
//     method: "PUT",
//     headers: {
//       "Content-Type": "Application/json",
//     },
//     body: JSON.stringify(action.payload.item),
//   });
//   yield put(updateProductCardAC(product));
// }

function* logoutWorker(action) {
  yield call(fetchData, {
    url: '/logout',
  });
  yield put(logoutUserAC());
}

export function* globalWatcher() {
  yield takeEvery("FETCH_CREATE_USER", postUserWorker);
  yield takeEvery("FETCH_UPDATE_USER", putUserWorker);
  // yield takeEvery("FETCH_UPDATE_PRODUCT", putProductWorker);
  yield takeEvery("FETCH_LOGOUT_USER", logoutWorker);
  yield takeEvery("FETCH_LOGIN_USER", loginUserAsync);
  // yield takeEvery('FETCH_USER_PRODUCTS', getUserProductsWorker)
  yield takeEvery('FETCH_ORDER_SEND', orderSendWorker)
}
