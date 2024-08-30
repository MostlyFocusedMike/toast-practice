import { useContext } from 'react';
import ToastContext from './context/ToastContext';
import ToastItem from './ToastItem';

export default function ToastList() {
  const { toasts } = useContext(ToastContext);

  return <ul className="toast-container">
    {
      toasts.map((toast) => {
        return <ToastItem key={toast.id} {...toast} />
      })
    }
  </ul>

}