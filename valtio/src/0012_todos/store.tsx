import { proxy, useSnapshot } from 'valtio';
import { devtools } from 'valtio/utils';

interface Todo {
  id: number;
  name: string;
  completd?: boolean;
}
export type Filter = 'all' | 'completed';
export const filters: Filter[] = ['all', 'completed'];
interface Store {
  todos: Todo[];
  filter: Filter;
}
//定义代理对象
const store = proxy<Store>({
  todos: [],
  filter: 'all',
});
devtools(store, { name: 'state name', enabled: true });
let id = 0;
export const actions = {
  //添加数据
  addTodo(todo: Omit<Todo, 'id'>) {
    store.todos.push({
      ...todo,
      id: id++,
    });
  },
  //更新数据状态
  toggleTodo(id: number, value: boolean) {
    const todo = store.todos.find((todo) => todo.id === id);
    if (todo && value) todo.completd = value;
    else if (todo) todo.completd = !todo.completd;
  },
  removeTodo(id: number) {
    store.todos = store.todos.filter((todo) => todo.id !== id);
  },
  toogleFilter(filter: Filter) {
    store.filter = filter;
  },
};

const useTodos = () => {
  const snapShot = useSnapshot(store);
  switch (snapShot.filter) {
    case 'all':
      return snapShot.todos;
    case 'completed':
      return snapShot.todos.filter((todo) => todo.completd);
    default:
      throw Error('Error: un supported filter');
  }
};
export function useFilter() {
  return useSnapshot(store).filter;
}

export default useTodos;
