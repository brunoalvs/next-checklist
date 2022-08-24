import { createContext, useContext, useEffect, useState } from "react";
import { IListTodoContext, IListTodo, ITodo } from "../types/todo";

import { v4 as uuidv4 } from 'uuid';

// import { addList } from '../utils/lists'

export const TodoContext = createContext<IListTodoContext>({
  lists: [],
  listActive: {
    id: '',
    title: '',
    todos: [],
    active: false,
    completed: false
  },
  archived: [],
  addList: () => { },
  removeList: () => { },
  activeList: () => { },
  archiveList: () => { },
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
    console.log('updated list', lists.find(list => list.active)?.title)

  }, [lists]);

  const addList = (title: string) => {
    const newList: IListTodo = {
      id: uuidv4(),
      title,
      active: lists.find(list => list.active) ? false : true,
      completed: false,
      todos: []
    }

    setLists([...lists, newList]);
  }

  const archiveList = (id: string) => {
    if (!id) {
      throw new Error('List ID is required');
    }

    // Remove list from active list
    try {
      const list = lists.find(list => list.id === id);
      if (!list) {
        throw new Error('List not found');
      }
      const newLists = lists.filter(list => list.id !== id);
      setLists(newLists);
    } catch (error) {
      console.error(error);
    }

    // Add list to archived list
    try {
      const list = lists.find(list => list.id === id);
      if (!list) {
        throw new Error('List not found');
      }
      const newArchived = [...archived, list];
      setArchived(newArchived);
    } catch (error) {
      console.error(error);
    }
  }

  const removeList = (id: string) => {
    if (!id) {
      throw new Error('List ID is required');
    }

    const confirm = window.confirm('Are you sure you want to remove this list?');
    if (!confirm) {
      return;
    }

    // Remove list from archived list
    try {
      const arquivedList = archived.find(list => list.id === id);
      if (!arquivedList) {
        throw new Error('List not found');
      }

      const newArchived = archived.filter(list => list.id !== id);
      setArchived(newArchived);
    } catch (error) {
      console.error(error);
    }
  }

  const updateList = (id: string, newData: IListTodo) => {
    if (!id) {
      throw new Error('List ID is required');
    }

    const list = lists.find(list => list.id === id);
    if (!list) {
      throw new Error('List not found');
    }

    const newLists = lists.map(list => {
      if (list.id === id) {
        return {
          ...list,
          ...newData
        }
      }
      return list;
    });

    setLists(newLists);
  }

  const activeList = (id: string) => {
    if (!id) {
      throw new Error('List ID is required');
    }

    const newLists = lists.map(list => {
      switch (list.id) {
        case id:
          list.active = true;
          break;
        default:
          list.active = false;
          break;
      }

      return list;
    })

    setLists(newLists);
    // set listActive
    const newListActive = newLists.find(list => list.id === id);
    if (!newListActive) {
      throw new Error('List not found');
    }
    setListActive(newListActive);
  }

  const addTodo: IListTodoContext["addTodo"] = (title: string, listId: string) => {
    // check if listId and title exist
    if (!title || !listId) {
      throw new Error('Title and listId are required');
    }
    // check if listId is valid
    const list = lists.find(list => list.id === listId);
    if (!list) {
      throw new Error('List not found');
    }

    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }

    const updatedList = {
      ...listActive,
      todos: [...list.todos, newTodo]
    }

    // update active listActive with updated list
    setListActive(updatedList);
    // update list with updated list
    const newLists = lists.map(list => {
      if (list.id === listId) {
        // update list with updated list
        list.todos = [...list.todos, newTodo];

        return list;
      }
      return list;
    })
    setLists(newLists);
  }

  const removeTodo: IListTodoContext["removeTodo"] = (id: string, listId: string) => {
    const listRemoved = lists.map(list => {
      if (list.id === listId) {
        list.todos = list.todos.filter(todo => todo.id !== id);
      }
      return list;
    })


    setLists(listRemoved);
  }

  const toggleTodo: IListTodoContext["toggleTodo"] = (id: string, listId: string) => {
    if (!id || !listId) {
      throw new Error('Todo ID and List ID are required');
    }

    const list = lists.find(list => list.id === listId);
    if (!list) {
      throw new Error('List not found');
    }

    const todo = list.todos.find(todo => todo.id === id);
    if (!todo) {
      throw new Error('Todo not found');
    }

    const newTodos = list.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    const newList = {
      ...list,
      todos: newTodos
    }

    updateList(listId, newList);
    setListActive(newList);
  }


  return (
    <TodoContext.Provider value={{
      lists,
      listActive,
      addList,
      activeList,
      removeList,
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