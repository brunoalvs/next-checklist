import { IListTodo } from "../../types/todo";
import { Button } from "../shared/Button";
import { useTodoContext } from "../../contexts/todo";

import { ButtonsContainer, Container, ErrorContainer, Header } from './styles'
import { TaskList } from "../TaskList";
import { useEffect, useState } from "react";

interface Tasks {
  // list: IListTodo
}

export const Tasks = ({ }: Tasks) => {
  const { addTodo, addList, listActive, archiveList } = useTodoContext()
  const [list, setList] = useState<IListTodo>(listActive)

  const handleAddTodo = (todo: string) => {
    console.log(`creating todo: ${todo}`)
    addTodo(todo, list.id)
  }

  useEffect(() => {
    setList(listActive)
  }, [listActive])

  if (!list) return (
    <ErrorContainer>
      <p>No list selected.</p>
      <Button onClick={() => addList('List 1')}>Create a new list</Button>
    </ErrorContainer>
  )

  return (
    <Container>
      <Header>
        <h2>{list.title}</h2>
        <ButtonsContainer>
          <Button onClick={() => handleAddTodo(`Task ${list.todos.length + 1}`)}>
            Add Task
          </Button>
          <Button onClick={() => archiveList(list.id)}>
            Archive List
          </Button>
        </ButtonsContainer>
      </Header>
      <TaskList />
    </Container>
  )
}