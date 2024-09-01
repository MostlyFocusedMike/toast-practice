import { useContext } from 'react';
import ToastContext from './ToastContext';
import Toast from './Toast';

export default function ToastList() {
  const { toasts } = useContext(ToastContext);

  return <ul className="toast-container">
    { toasts.map(toast => <Toast key={toast.id} {...toast} />) }
  </ul>
}