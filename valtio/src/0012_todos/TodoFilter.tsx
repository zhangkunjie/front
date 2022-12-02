import { actions, useFilter, filters } from './store';
const TodoFilter: React.FC = () => {
  const activeFilter = useFilter();
  const filerItems = filters.map((filter) => (
    <button
      key={filter}
      style={{ fontWeight: activeFilter === filter ? 'bold' : 'normal' }}
      onClick={() => actions.toogleFilter(filter)}
    >
      {filter}
    </button>
  ));
  return <div>{filerItems}</div>;
};
export default TodoFilter;
