import { useEffect, useState } from "react"
import ReactModal from "react-modal"
import { Button } from "../../shared/Button"
import { Input } from '../../shared/Input'
import {Container, Header} from './styles'

interface AddNewTaskProps {
  isOpen: boolean
  addNewList: (todo: string) => void
  onRequestClose: () => void
}

export const AddNewList = ({isOpen, addNewList: addNewTask, onRequestClose}: AddNewTaskProps) => {
  const [newList, setNewList] = useState("")

  const handleClick = () => {
    addNewTask(newList)
    setNewList("")
    onRequestClose()
  }

  useEffect(() => {
    if (!isOpen) setNewList("")
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
        <h1>New List</h1>

        <Input
          autoFocus
          type="text"
          required
          value={newList}
          onChange={(e) => setNewList(e.target.value)}
          placeholder="Enter a new task"
        />

        <Button
          disabled={newList.length === 0}
          onClick={() => handleClick()}
        >
          Add
        </Button>
      </Container>
    </ReactModal>
  )
}