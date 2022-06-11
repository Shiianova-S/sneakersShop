import React from 'react';
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const natification =() => toast.error("Ошибка регистрации");


function ErorAlertMessage(props) {
  return (
    <div>
      <button onClick={natification}>вызов ErorAlertMessage</button>
   
      theme = {'dark'}
      style={{marginTop: '200px'}}
      position="top-center"
      autoClose={8000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    </div>
  );
}

export default ErorAlertMessage;
