import { proxyMap } from 'valtio/utils';
import { proxy } from 'valtio';
// 用法和原生Map一样，但若在proxy用new Map()
// 值发生变化是不会触发监听的，用proxyMap则可以触发监听
//亦可把proxyMap放到proxy中
const st = new Map();
st.set('id', '1');
st.set('name', 'Tom');
const state = proxyMap(st);
state.set('city', '北京');
const ProxyMap: React.FC = () => {
  const data = proxy(state);
  return (
    <div>
      <h5>{data}</h5>
    </div>
  );
};
export default ProxyMap;
