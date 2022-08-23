import { useTodoContext } from '../../../contexts/todo'
import { Button } from '../../shared/Button'
import { TodoList } from '../../TodoList'
import { Container, Header } from './styles'

export const Sidebar = () => {
  const { lists, addList, toggleList } = useTodoContext()

  const handleClickList = (listId: number) => {
    toggleList(listId)
  }

  return (
    <Container>
      <Header>
        <h1>Lists</h1>
        <Button onClick={() => {
          addList(
            `List ${lists.length + 1}`
          )
        }}>
          Add
        </Button>
      </Header>
      <TodoList lists={lists} activeList={handleClickList} />
    </Container>
  )
}