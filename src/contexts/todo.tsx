import { createContext, useContext, useState } from "react";
import { IListTodoContext, ITodoContext, ITodo } from "../types/todo";

// export const TodoContext = createContext<ITodoContext>({
//   todos: [],
//   addTodo: () => { },
//   removeTodo: () => { },
//   toggleTodo: () => { },
// });

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
      list: [],
    }]);
  }

  const removeList = (id: number) => {
    setLists(lists.filter(list => list.id !== id));
  }

  const toggleList = (id: number) => {
    setLists(lists.map(list => {
      if (list.id === id) {
        list.active = !list.active;
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


// export const useTodoContext = () => useContext(TodoContext);

// export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
//   const [todos, setTodos] = useState<ITodoContext["todos"]>([
//     {
//       id: 1,
//       title: "Design Cmore",
//       completed: false,
//     },
//     {
//       id: 2,
//       title: "Learn React",
//       completed: false,
//     },
//     {
//       id: 3,
//       title: "Learn TypeScript",
//       completed: false,
//     },
//     {
//       id: 4,
//       title: "Learn Next.js",
//       completed: false,
//     },
//   ]);

//   const addTodo = (title: string) => {
//     setTodos([...todos, { id: Math.random(), title, completed: false }]);
//   }

//   const removeTodo = (id: number) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   }

//   const toggleTodo = (id: number) => {
//     setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
//   }

//   return (
//     <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
//       {children}
//     </TodoContext.Provider>
//   );
// }