import { proxy, useSnapshot } from 'valtio';
import state from '../state/state';
const st = proxy(state);
const Counter: React.FC = () => {
  const snap = useSnapshot(st);
  return (
    <div>
      {snap.id}
      <button onClick={() => ++st.id}>+1</button>
    </div>
  );
};
export default Counter;
