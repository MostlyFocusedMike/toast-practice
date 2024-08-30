import { useContext } from 'react'
import ToastContext from './context/ToastContext';
import { GOOD, BAD } from './constants';

export default function Buttons() {
  const { addToast } = useContext(ToastContext);

  const handleDefault = () => addToast('Done');
  const handleGood = () => addToast('thank you!', { status: GOOD });
  const handleBad = () => addToast('Failure', { status: BAD });
  const handleCancel = () => addToast('Cancellable', { hasButton: true });
  const handlePerm = () => addToast('ALWAYS', { status: BAD, isPerm: true });

  return <>
    <button onClick={handleDefault}>Neutral Toast</button>
    <button onClick={handleGood}>Good Toast</button>
    <button onClick={handleBad}>Bad Toast</button>
    <button onClick={handleCancel}>Cancellable Toast</button>
    <button onClick={handlePerm}>Permanent Toast</button>
  </>
}