import React from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const natification =() => toast.success("Успешная регистрация");

function SuccessAlertMessage(props) {
  return (
    <div>
      <button onClick={natification}>вызов SuccessAlertMessage</button>
      <ToastContainer
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
      />
    </div>
  );
}

export default SuccessAlertMessage;
