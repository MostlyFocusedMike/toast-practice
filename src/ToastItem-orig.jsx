import { useContext, useEffect } from "react";
import ToastContext from "./context/ToastContext";

export default function ToastItem({ id, msg, status }) {
  const { removeToast } = useContext(ToastContext);

  useEffect(() => {
    setTimeout(() => removeToast(id), 6000);
  }, [id, removeToast]);

  return <li className={`toast ${status}-toast`}>
    <p>{msg}</p>
  </li>
}