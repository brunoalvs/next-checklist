import { createContext, useContext, useEffect, useState } from "react";
import { IListTodoContext, IListTodo } from "../types/todo";

export const TodoContext = createContext<IListTodoContext>({
  lists: [],
  listActive: {
    id: 0,
    title: "",
    todos: [],
    active: false,
    completed: false
  },
  archived: [],
  addList: () => { },
  removeList: () => { },
  toggleList: () => { },
  archiveList: () => { },
  getTodoList: (id: number) => { return [] },
  addTodo: () => { },
  removeTodo: () => { },
  toggleTodo: () => { },
})

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [lists, setLists] = useState<IListTodoContext["lists"]>([]);
  const [listActive, setListActive] = useState<IListTodoContext["listActive"]>(lists[0]);
  const [archived, setArchived] = useState<IListTodoContext["archived"]>([]);

  useEffect(() => {
    setListActive(
      lists.find(list => list.active) || lists[0]
    )
  }, [lists]);

  const addList = (title: string) => {
    setLists([...lists, {
      id: Math.random(),
      title,
      active: lists.find(list => list.active) ? false : true,
      completed: false,
      todos: [],
    }]);
  }

  const removeList = (id: number) => {
    setLists(lists.filter(list => list.id !== id));

    if (lists.length === 0) {
      console.log("No lists left. Create a new list."), lists;
    }
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

  const archiveList = (id: number) => {
    let newList
    const target = lists.find(list => list.id === id);
    const archive = [...archived, target];

    if (!target) {
      throw new Error("Target list not found");
    }


    newList = lists.filter(list => list.id !== id);
    console.log('archived', archive)
    console.log('newList', newList)

    // return
    setArchived([...archived, target]);
    setLists(newList);
    // removeList(id);
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
        list.todos.push({
          id: Math.random(),
          title,
          completed: false,
        });
      }
      return list;
    }));
  }

  const removeTodo: IListTodoContext["removeTodo"] = (id: number, listId: number) => {
    const remove = lists.map(list => {
      if (list.id === listId) {
        list.todos = list.todos.filter(todo => todo.id !== id);
      }
      return list;
    })

    return console.log(remove);

    setLists(remove);
  }

  const toggleTodo: IListTodoContext["toggleTodo"] = (id: number, listId: number) => {
    setLists(lists.map(list => {
      if (list.id === listId) {
        list.todos = list.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      } else {
        console.log(listId === list.id)
        console.log('list.id', list.id)
        console.log('listId', listId)
        console.log("list not found");
      }
      return list;
    }));
  }


  return (
    <TodoContext.Provider value={{
      lists,
      listActive,
      addList,
      removeList,
      toggleList,
      getTodoList,
      addTodo,
      removeTodo,
      toggleTodo,
      archived,
      archiveList
    }}>
      {children}
    </TodoContext.Provider>
  );
}