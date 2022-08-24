import { uuid} from 'uuid'

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface IListTodo {
  id: string;
  title: string;
  active: boolean;
  completed: boolean;
  todos: ITodo[];
}

export interface IListTodoContext {
  lists: IListTodo[];
  listActive: IListTodo;
  archived: IListTodo[];
  addList: (title: string) => void;
  removeList: (id: string) => void;
  activeList: (id: string) => void;
  archiveList: (id: string) => void;
  // getTodoList: (id: string) => void;
  addTodo: (title: string, listId: string) => void;
  removeTodo: (id: string, listId: string) => void;
  toggleTodo: (id: string, listId: string) => void;
}