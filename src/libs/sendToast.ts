import { toast } from 'react-toastify';

export const sendToast = Object.freeze({
  success: (text: string) =>
    toast.success(text, {
      position: 'bottom-right',
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
  error: (text: string) =>
    toast.error(text, {
      position: 'bottom-right',
      autoClose: 1500,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
});
