import { IListTodoContext } from "../../types/todo";

export const removeList: IListTodoContext['removeList'] = (id) => {
  if (!id) {
    throw new Error('List ID is required to create a new List');
  }

  window.alert(`addList: ${id}`);
}