import { useEffect, useState } from "react";
import { Button } from "../shared/Button";
import { useTodoContext } from "../../contexts/todo";
import { TaskList } from "../TaskList";

import ReactModal from 'react-modal'

import { ButtonsContainer, Container, ErrorContainer, Header } from './styles'

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
      <ReactModal isOpen={isModalOpen}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          height: '100%',
          width: '100%',
        }}>
          <h1>Modal</h1>

          <Button onClick={() => {
            addTodo(`Task ${listActive.todos.length + 1}`, listActive.id)
            setIsModalOpen(false)
          }}>
            Add Task
          </Button>
        </div>
      </ReactModal>
    </>
  )
}