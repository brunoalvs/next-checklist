import { useEffect, useState } from "react";
import { Button } from "../shared/Button";
import { useTodoContext } from "../../contexts/todo";
import { TaskList } from "../TaskList";

import { ButtonsContainer, Container, ErrorContainer, Header } from './styles'
import { ModalAddNewList, ModalAddNewTask } from "../Modals";

export const Tasks = () => {
  const { addTodo, addList, listActive, archiveList } = useTodoContext()
  const [isModalAddNewTaskOpen, setIsModalAddNewTaskOpen] = useState(false)
  const [isModalAddNewListOpen, setIsModalAddNewListOpen] = useState(false)

  useEffect(() => { }, [listActive, isModalAddNewTaskOpen, isModalAddNewListOpen])

  if (!listActive) return (
    <>
      <ErrorContainer>
        <p>No list selected.</p>
        <Button onClick={() => setIsModalAddNewListOpen(true)}>Create a new list</Button>
      </ErrorContainer>
      <ModalAddNewList
        isOpen={isModalAddNewListOpen}
        onRequestClose={() => setIsModalAddNewListOpen(false)}
        addNewList={addList}
      />
    </>
  )

  return (
    <>
      <Container>
        <Header>
          <h2>{listActive.title}</h2>
          <ButtonsContainer>
            <Button onClick={() => setIsModalAddNewTaskOpen(true)}>
              Add Task
            </Button>
            <Button onClick={() => archiveList(listActive.id)}>
              Archive
            </Button>
          </ButtonsContainer>
        </Header>
        <TaskList />
      </Container>
      <ModalAddNewTask
        isOpen={isModalAddNewTaskOpen}
        onRequestClose={() => setIsModalAddNewTaskOpen(false)}
        addNewTask={(todo) => addTodo(todo, listActive.id)}
      />
    </>
  )
}