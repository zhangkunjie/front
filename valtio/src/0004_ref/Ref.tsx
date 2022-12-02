import { proxy, subscribe } from 'valtio';
import state from '../state/state';
//ref：用ref代理某个值后，改变该值，不会触发监听
const st = proxy(state);
// 订阅整个状态
subscribe(st, () => console.log('订阅全部状态' + st));
const Ref: React.FC = () => {
  return (
    <button onClick={() => (st.famaily.father = 'Jack')}>
      Ref修饰的值不触发代理
    </button>
  );
};
export default Ref;
