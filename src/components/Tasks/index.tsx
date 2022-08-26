import { useEffect, useState } from "react";
import { Button } from "../shared/Button";
import { useTodoContext } from "../../contexts/todo";
import { TaskList } from "../TaskList";

import { ButtonsContainer, Container, ErrorContainer, Header } from './styles'
import { ModalAddNewTask } from "../Modals";

export const Tasks = () => {
  const { addTodo, addList, listActive, archiveList } = useTodoContext()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => { }, [listActive])

  if (!listActive) return (
    <ErrorContainer>
      <p>No list selected.</p>
      <Button onClick={() => addList('List 1')}>Create a new list</Button>
    </ErrorContainer>
  )

  const onRequestCloseModal = () => setIsModalOpen(false)

  const handleClick = (todo: string) => {
    addTodo(todo, listActive.id)
  }

  return (
    <>
      <Container>
        <Header>
          <h2>{listActive.title}</h2>
          <ButtonsContainer>
            <Button onClick={() => setIsModalOpen(true)}>
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
        isOpen={isModalOpen}
        onRequestClose={onRequestCloseModal}
        addNewTask={handleClick}
      />
    </>
  )
}