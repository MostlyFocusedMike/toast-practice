import { useState } from 'react';
import { createContext } from 'react';
import { DEFAULT } from './constants';

const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (msg, opts = {}) => {
    const { status = DEFAULT, hasButton = false, ms = 5000 } = opts;
    const id = new Date().getTime();
    const timer = setTimeout(() => removeToast(id), ms);

    setToasts([...toasts, { id, msg, status, hasButton, ms, timer }]);
  };

  const removeToast = (id) => {
    const clearToast = (toast) => {
      if (toast.id === id) clearTimeout(toast.timer);
      return toast.id !== id;
    }

    setToasts((prevToasts) => prevToasts.filter(clearToast));
  };

  const context = { toasts, addToast, removeToast };

  return (
    <ToastContext.Provider value={context}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastContext;