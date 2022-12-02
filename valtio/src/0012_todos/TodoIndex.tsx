import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

const TodoIndex: React.FC = () => {
  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoFilter />
    </div>
  );
};
export default TodoIndex;
