export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IListTodo {
  id: number;
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
  removeList: (id: number) => void;
  toggleList: (id: number) => void;
  archiveList: (id: number) => void;
  getTodoList: (id: number) => void;
  addTodo: (title: string, listId: number) => void;
  removeTodo: (id: number, listId: number) => void;
  toggleTodo: (id: number, listId: number) => void;
}