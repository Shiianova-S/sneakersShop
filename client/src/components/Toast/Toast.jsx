import { toast } from 'react-toastify';

export function info(message) {
  toast.info(message, {
    position: 'top-center',
    autoClose: 4500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    marginTop: '200px'
  });
}

export function error(message) {
  toast.error(message, {
    position: 'top-center',
    autoClose: 4500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    marginTop: '200px'
  });
}
