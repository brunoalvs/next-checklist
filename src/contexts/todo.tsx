import { createContext, useContext, useState } from "react";
import { IListTodoContext } from "../types/todo";

export const TodoContext = createContext<IListTodoContext>({
  lists: [],
  addList: () => { },
  removeList: () => { },
  toggleList: () => { },
  getTodoList: (id: number) => { return [] },
  addTodo: () => { },
  removeTodo: () => { },
  toggleTodo: () => { },
})

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [lists, setLists] = useState<IListTodoContext["lists"]>([]);

  const addList = (title: string) => {
    setLists([...lists, {
      id: Math.random(),
      title,
      active: false,
      completed: false,
      list: [
        {
          id: Math.random(),
          title: 'Todo Item 1',
          completed: false,
        },
        {
          id: Math.random(),
          title: 'Todo Item 2',
          completed: false,
        }
      ],
    }]);
  }

  const removeList = (id: number) => {
    setLists(lists.filter(list => list.id !== id));
  }

  const toggleList = (id: number) => {

    // turn off all lists
    setLists(lists.map(list => {
      list.active = false;
      return list;
    }));

    // turn on the list with id
    setLists(lists.map(list => {
      if (list.id === id) {
        list.active = true;
      }
      return list;
    }));
  }

  const getTodoList = (id: number) => {
    const todoList = lists.find(list => list.id === id);

    if (todoList === undefined) {
      throw new Error("List not found");
    }

    return todoList;
  }

  const addTodo: IListTodoContext["addTodo"] = (title: string, listId: number) => {
    setLists(lists.map(list => {
      if (list.id === listId) {
        list.list.push({
          id: Math.random(),
          title,
          completed: false,
        });
      }
      return list;
    }));
  }

  const removeTodo: IListTodoContext["removeTodo"] = (id: number, listId: number) => {
    setLists(lists.map(list => {
      if (list.id === listId) {
        list.list = list.list.filter(todo => todo.id !== id);
      }
      return list;
    }));
  }

  const toggleTodo: IListTodoContext["toggleTodo"] = (id: number, listId: number) => {
    setLists(lists.map(list => {
      if (list.id === listId) {
        list.list = list.list.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }).filter(todo => todo.completed === false);
      }
      return list;
    }));
  }

  return (
    <TodoContext.Provider value={{
      lists,
      addList,
      removeList,
      toggleList,
      getTodoList,
      addTodo,
      removeTodo,
      toggleTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
}