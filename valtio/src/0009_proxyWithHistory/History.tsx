import { proxyWithHistory } from 'valtio/utils';
import { useSnapshot } from 'valtio';
// 历史撤回和重做;
// 这个API代理会记录历史记录;
// undo上一个记录;
// redo下一个记录;
const st = proxyWithHistory({ id: 0 });
const ProxyWithHistory: React.FC = () => {
  const { value, undo, redo } = useSnapshot(st);
  return (
    <div>
      {st.value.id}
      <button onClick={() => st.value.id++}>+1</button>
      <button onClick={() => undo()}>撤回</button>
      <button onClick={() => redo()}>重做</button>
      <h5>proxyWithHistory</h5>
    </div>
  );
};
export default ProxyWithHistory;
