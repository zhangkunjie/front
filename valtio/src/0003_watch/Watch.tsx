import { proxy } from 'valtio';
import { watch } from 'valtio/utils';
import state from '../state/state';
//watch:会立即执行一次
const st = proxy(state);
const stop = watch((get) => {
  console.log('状态发生了改变', get(st));
});
stop();
const Watch: React.FC = () => {
  return <button onClick={() => ++st.id}>+1</button>;
};
export default Watch;
