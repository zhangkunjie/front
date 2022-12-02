import { useState } from 'react';
import { actions } from './store';

const TodoAdd: React.FC = () => {
  const [value, setValue] = useState('');
  const handleAdd = () => {
    actions.addTodo({ name: value });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input
        name="todo"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <button onClick={() => handleAdd()}>添加</button>
    </div>
  );
};
export default TodoAdd;
