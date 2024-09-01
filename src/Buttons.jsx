import { useContext } from 'react'
import ToastContext from './ToastContext';
import { GOOD, BAD } from './constants';

export default function Buttons() {
  const { addToast } = useContext(ToastContext);

  const handleDefault = () => addToast('Confirmed');
  const handleGood = () => addToast('thank you!', { status: GOOD });
  const handleBad = () => addToast('Failure', { status: BAD });
  const handleCancel = () => addToast('Cancellable', { hasButton: true });
  const handleLong = () => addToast('Long', { ms: 10_000, hasButton: true });

  return <>
    <button onClick={handleDefault}>Base Toast</button>
    <button onClick={handleGood}>Good Toast</button>
    <button onClick={handleBad}>Bad Toast</button>
    <button onClick={handleCancel}>Cancellable Toast</button>
    <button onClick={handleLong}>Long Toast</button>
  </>
}