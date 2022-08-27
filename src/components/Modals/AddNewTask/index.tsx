import { useEffect, useState } from "react"
import ReactModal from "react-modal"
import { Button } from "../../shared/Button"
import { Input } from '../../shared/Input'
import CloseIcon from '../../../../public/close.svg'

import {Container, Header, Footer, CloseButton} from './styles'

interface AddNewTaskProps {
  isOpen: boolean
  addNewTask: (todo: string) => void
  onRequestClose: () => void
}

export const AddNewTask = ({isOpen, addNewTask, onRequestClose}: AddNewTaskProps) => {
  const [newTodo, setNewTodo] = useState("")

  async function createNewTask () {
    addNewTask(newTodo)
    setNewTodo("")
  }

  const handleClick = () => {
    createNewTask().then(() => onRequestClose())
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (newTodo.length <= 0) {
      return
    }

    if (e.key === "Enter") {
      addNewTask(newTodo)
      console.log(`${newTodo} added`)
      setNewTodo("")
      console.log(`newTodo cleared`)
      onRequestClose()
      console.log(`modal closed ${isOpen}`)
    }
  }

  useEffect(() => {
    if (!isOpen) setNewTodo("")
  } , [isOpen])

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        content: {
          width: "80%",
          maxWidth: "300px",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none",
        }
      }}
    >
      <Header>
        <CloseButton onClick={()=> onRequestClose()}>
          <CloseIcon />
        </CloseButton>
      </Header>
      <Container>
        <h1>New Task</h1>

        <Input
          autoFocus
          type="text"
          required
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new task"
          onKeyDown={(e) => e.key === "Enter" ?? handleClick()}
        />

        <Footer>
          <Button onClick={() => onRequestClose()}>
            Cancel
          </Button>
          <Button
            disabled={newTodo.length === 0}
            onClick={() => {
              addNewTask(newTodo)
              setNewTodo("")
              onRequestClose()
            }}
          >
            Add
          </Button>
        </Footer>
      </Container>
    </ReactModal>
  )
}