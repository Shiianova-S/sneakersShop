import React from 'react';
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { clearProductCartAC } from '../../redux/actionCreators/cartAC'

function SendOrder(props) {

  const dispatch = useDispatch();
  const {cartProducts} = useSelector(state => state.cartReducer);
  // const { User } = useSelector(state => state.usersReducer);
  console.log(cartProducts);

  const User = {};

  function sendOrder() {
  fetch('/cart', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  credentials: 'include',
  body: JSON.stringify({cartProducts, User})
}).then(data => data.json())
.then(data => {
  if (data.message === 'sucsess') {
    localStorage.clear();
    dispatch(clearProductCartAC());
    return console.log('Успех');
  } else if (data.message === 'error'){
    console.log(data.error)
  }
  return console.log('что-то пошло не так!')
  })
}

  return (
    <div>
      <Button onClick={sendOrder}>Отправить заказ</Button>
      
    </div>
  );
}

export default SendOrder;
