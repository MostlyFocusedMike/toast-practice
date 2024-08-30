import { useState } from 'react';
import ToastContext from './ToastContext';
import { DEFAULT } from '../constants';

export default function ToastContextProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (
    msg,
    { status = DEFAULT, isPerm = false, hasButton = false } = {}
  ) => {
    const toast = { msg, status, id: Date.now(), isPerm, hasButton };
    setToasts([...toasts, toast]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter(toast => toast.id !== id));
  }

  const context = { toasts, addToast, removeToast };

  return (
    <ToastContext.Provider value={context}>
      {children}
    </ToastContext.Provider>
  );
}
