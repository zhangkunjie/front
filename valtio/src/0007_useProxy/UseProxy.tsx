import { useProxy } from 'valtio/macro';
import state from '../state/state';
const UseProxy: React.FC = () => {
  useProxy(state);
  //等价于 const snap = useSnapshot(state)
  return (
    <div>
      {state.id}
      <button onClick={() => ++state.id}>+1</button>
    </div>
  );
};
export default UseProxy;
