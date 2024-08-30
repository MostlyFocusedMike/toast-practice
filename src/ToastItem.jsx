import { useCallback, useContext, useState, useEffect, useRef } from "react";
import ToastContext from "./context/ToastContext";

export default function ToastItem({ id, msg, status, isPerm, hasButton }) {
  const [isFadeOut, setIsFadeOut] = useState(false);
  const { removeToast } = useContext(ToastContext);
  const timer = useRef(null);

  const handleClose = useCallback(() => {
    clearTimeout(timer.current);
    setIsFadeOut(true);
    setTimeout(() => removeToast(id), 490);
  }, [id, removeToast])

  useEffect(() => {
    if (!isPerm) timer.current = setTimeout(handleClose, 2000);
  }, [handleClose, isPerm]);

  const classes = `${status}-toast ${isFadeOut ? 'fade-out' : ''}`;
  const doShowButton = isPerm || hasButton;

  return <li className={`toast ${classes}`}>
    <p>{msg}</p>
    { doShowButton && <button onClick={handleClose}>Close</button> }
  </li>
}