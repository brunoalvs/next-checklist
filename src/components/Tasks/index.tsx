import { useEffect } from "react";
import { Button } from "../shared/Button";
import { useTodoContext } from "../../contexts/todo";
import { TaskList } from "../TaskList";

import { ButtonsContainer, Container, ErrorContainer, Header } from './styles'

export const Tasks = () => {
  const { addTodo, addList, listActive, archiveList } = useTodoContext()

  useEffect(() => { }, [listActive])

  if (!listActive) return (
    <ErrorContainer>
      <p>No list selected.</p>
      <Button onClick={() => addList('List 1')}>Create a new list</Button>
    </ErrorContainer>
  )

  return (
    <Container>
      <Header>
        <h2>{listActive.title}</h2>
        <ButtonsContainer>
          <Button onClick={() => addTodo(`Task ${listActive.todos.length + 1}`, listActive.id)}>
            Add Task
          </Button>
          <Button onClick={() => archiveList(listActive.id)}>
            Archive List
          </Button>
        </ButtonsContainer>
      </Header>
      <TaskList />
    </Container>
  )
}