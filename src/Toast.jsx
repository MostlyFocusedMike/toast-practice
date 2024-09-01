import { useContext, useRef, useEffect } from 'react';
import ToastContext from './ToastContext';

const setAnimation = (ref, ms, animation) => {
  ref.current.style.animation = `${ms}ms ease forwards ${animation}`;
};

export default function Toast({ id, ms, msg, status, hasButton }) {
  const toast = useRef(null);
  const { removeToast } = useContext(ToastContext);

  useEffect(() => {
    setAnimation(toast, ms, 'slideInOut');
  }, [ms]);

  const handleClick = () => {
    setAnimation(toast, 500, 'slideOut');
    setTimeout(() => removeToast(id), 500);
  }

  return <li ref={toast} className={`toast ${status}-toast`}>
    <p>{msg}</p>
    { hasButton && <button onClick={handleClick}>Close</button> }
  </li>
}