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

  useEffect(() => { }, [listActive])
  const onRequestCloseModal = () => setIsModalAddNewTaskOpen(false)

  if (!listActive) return (
    <>
      <ErrorContainer>
        <p>No list selected.</p>
        <Button onClick={() => setIsModalAddNewTaskOpen(true)}>Create a new list</Button>
      </ErrorContainer>
      <ModalAddNewList
        isOpen={isModalAddNewTaskOpen}
        onRequestClose={onRequestCloseModal}
        addNewList={addList}
      />
    </>
  )


  const handleClick = (todo: string) => {
    addTodo(todo, listActive.id)
  }

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
              Archive List
            </Button>
          </ButtonsContainer>
        </Header>
        <TaskList />
      </Container>
      <ModalAddNewTask
        isOpen={isModalAddNewTaskOpen}
        onRequestClose={onRequestCloseModal}
        addNewTask={handleClick}
      />
    </>
  )
}