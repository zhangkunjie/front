import { useSnapshot, proxy, subscribe } from 'valtio';
import { devtools } from 'valtio/utils';
import state from '../state/state';
//可以使用Redux
const st = proxy(state);
const dev = devtools(st, { name: 'state name', enabled: true });
const DevTools: React.FC = () => {
  const snap = useSnapshot(st);
  return (
    <div>
      {snap.id}
      <button onClick={() => ++st.id}>+1</button>
    </div>
  );
};
export default DevTools;
