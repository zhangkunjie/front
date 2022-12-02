import state from '../state/state';
import { proxy } from 'valtio';
import { derive } from 'valtio/utils';
const st = proxy(state);
//计算属性
const derived = derive({
  doubled: (get) => get(st).id * 2,
});
const Derive: React.FC = () => {
  return (
    <div>
      {st.id}|{derived.doubled}
      <button onClick={() => ++st.id}>+1</button>
    </div>
  );
};
export default Derive;
