import { IListTodoContext } from "../../types/todo";

export const addList: IListTodoContext['addList'] = (title) => {

  if (!title) {
    throw new Error('Title is required to create a new List');
  }

  window.alert(`addList: ${title}`);
}