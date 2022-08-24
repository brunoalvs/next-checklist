import { IListTodo } from '../../types/todo';
import { Container, Item } from './styles'

interface TodoListProps {
  lists: IListTodo[];
  activeList: (listId: string) => void;
}

export const TodoList = ({ lists, activeList }: TodoListProps) => {
  return (
    <Container>
      {lists.map(list => (
        <Item isActive={list.active} isCompleted={list.completed} className='todo' key={list.id} onClick={() => activeList(list.id)}>
          {list.title}
        </Item>
      ))}
    </Container>
  )
}