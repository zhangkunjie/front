import useTodos from './store';
import { actions } from './store';
const TodoList: React.FC = () => {
  //删除
  const removeTodo = (id: number) => {
    actions.removeTodo(id);
  };
  //切换状态
  const handleToggleTodo = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.checked;
    actions.toggleTodo(id, value);
  };
  const todoList = useTodos();
  const itmes = todoList.map((todo) => (
    <li key={todo.id}>
      <input
        type="checkbox"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleToggleTodo(todo.id, e)
        }
      />
      {todo.name}
      <button onClick={() => removeTodo(todo.id)}>删除</button>
    </li>
  ));
  return <ul>{itmes}</ul>;
};
export default TodoList;
