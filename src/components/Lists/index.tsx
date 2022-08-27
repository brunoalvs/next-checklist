import { useState } from "react"
import { useRouter } from "next/router"
import { useTodoContext } from "../../contexts/todo"
import { Button } from "../shared/Button"
import { ModalAddNewList } from "../Modals"

import { Container, Header, ButtonsContainer, ListLists, ListItem, ErrorContainer } from "./styles"

export const Lists = () => {
  const { activeList, addList, lists } = useTodoContext()
  const { push } = useRouter()

  const [isModalOpen, setIsModalOpen] = useState(false)

  async function handleClickOnList(id: string) {
    activeList(id)
    push('/')
  }

  if (lists.length === 0) {
    return (
      <>
        <ErrorContainer>
          <p>No list selected.</p>
          <Button onClick={() => setIsModalOpen(true)}>Create a new list</Button>
        </ErrorContainer>
        <ModalAddNewList
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          addNewList={addList}
        />
      </>
    )
  }

  return (
    <>
      <Container>
        <Header>
          <h1>Task Lists</h1>
          <ButtonsContainer>
            <Button onClick={() => setIsModalOpen(true)}>
              Add List
            </Button>
          </ButtonsContainer>
        </Header>
        <ListLists>
          {lists.map(task => (
            <ListItem
              key={task.id}
              onClick={() => handleClickOnList(task.id)}
            >
              {task.title}
            </ListItem>
          ))}
        </ListLists>
      </Container>
      <ModalAddNewList
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        addNewList={addList}
      />
    </>
  )
}