import { subscribe, proxy } from 'valtio';
import { subscribeKey } from 'valtio/utils';
import state from '../state/state';
const st = proxy(state);
// 订阅整个状态
subscribe(st, () => console.log('订阅全部状态' + st));
//订阅部分状态
subscribe(st.address, () => console.log('订阅部分状态' + st.address));
//订阅原始值
subscribeKey(st, 'id', (v) => console.log('state.id has changed to', v));
const Subscribe: React.FC = () => {
  return (
    <div>
      <button onClick={() => ++st.id}>+1</button>
      <button onClick={() => (st.address.city = '天津')}>改变地址</button>
    </div>
  );
};
export default Subscribe;
