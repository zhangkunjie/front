import { proxySet } from 'valtio/utils';
import { proxy } from 'valtio';
const state = proxySet([1, 2, 3]);
const ProxySet: React.FC = () => {
  const st = proxy(state);
  st.add(4);
  state.forEach((v) => console.log(v)); // 2,3,4
  st.delete(1);
  state.forEach((v) => console.log(v)); // 2,3,4
  return (
    <div>
      <h5>ProxySet</h5>
    </div>
  );
};
export default ProxySet;
