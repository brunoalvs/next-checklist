import { useEffect, useState } from "react"
import ReactModal from "react-modal"
import { Button } from "../../shared/Button"
import { Input } from '../../shared/Input'
import {Container, Header} from './styles'

interface AddNewTaskProps {
  isOpen: boolean
  addNewTask: (todo: string) => void
  onRequestClose: () => void
}

export const AddNewTask = ({isOpen, addNewTask, onRequestClose}: AddNewTaskProps) => {
  const [newTodo, setNewTodo] = useState("")

  const handleClick = () => {
    addNewTask(newTodo)
    setNewTodo("")
    onRequestClose()
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
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        content: {
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
        <button onClick={()=> onRequestClose()}>Close</button>
      </Header>
      <Container>
        <h1>New Task</h1>

        <Input
          autoFocus
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new task"
        />

        <Button
          disabled={newTodo.length === 0}
          onClick={() => handleClick()}
        >
          Add
        </Button>
      </Container>
    </ReactModal>
  )
}