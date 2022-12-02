import { useSnapshot, proxy, subscribe } from 'valtio';
import state from '../state/state';
const st = proxy(state);
// 订阅整个状态
subscribe(st, () => console.log('订阅全部状态' + st.name));
const Sync: React.FC = () => {
  const snap = useSnapshot(st, { sync: true });
  return (
    <input value={snap.name} onChange={(e) => (st.name = e.target.value)} />
  );
};
export default Sync;
