import React from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const toastInfo =() => toast.info("Для подтверждения регистрации перейдите по ссылке в письме пришедшем на ваш e-mail");


function InfoAlertMessage(props) {
  return (
    <div>
       {/* <button onClick={toastInfo}>вызов InfoAlertMessage</button> */}
       <ToastContainer
      theme = {'dark'}
      style={{marginTop: '200px'}}
      position="top-center"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </div>
  );
}

export default InfoAlertMessage;
